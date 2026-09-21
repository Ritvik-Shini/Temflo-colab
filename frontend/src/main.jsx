import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const API_BASE = 'http://localhost:5005/api';
const emptyPage = { title: '', slug: '', description: '', fullDescription: '', image: '', categoryId: '', locationName: '', locationCoordinates: '', locationMapsUrl: '', videoLink: '' };

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, { headers: { 'Content-Type': 'application/json' }, ...options });
  const body = await response.json();
  if (!response.ok) throw new Error(body.message || `Request failed with ${response.status}`);
  return body;
}

function App() {
  const [health, setHealth] = React.useState(null);
  const [dbStatus, setDbStatus] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [pages, setPages] = React.useState([]);
  const [galleryImages, setGalleryImages] = React.useState([]);
  const [media, setMedia] = React.useState([]);
  const [siteData, setSiteData] = React.useState(null);
  const [categoryName, setCategoryName] = React.useState('');
  const [categorySlug, setCategorySlug] = React.useState('');
  const [pageForm, setPageForm] = React.useState(emptyPage);
  const [selectedPage, setSelectedPage] = React.useState(null);
  const [notice, setNotice] = React.useState({ type: '', text: '' });
  const [loading, setLoading] = React.useState(true);

  const loadDashboard = React.useCallback(async () => {
    setLoading(true);
    try {
      const [healthResponse, dbResponse, categoriesResponse, pagesResponse, galleryResponse, mediaResponse, dataResponse] = await Promise.all([
        request('/health'), request('/db-status'), request('/categories'), request('/pages'), request('/gallery-images'), request('/media'), request('/data'),
      ]);
      setHealth(healthResponse); setDbStatus(dbResponse); setCategories(categoriesResponse.data); setPages(pagesResponse.data);
      setGalleryImages(galleryResponse.data); setMedia(mediaResponse.data); setSiteData(dataResponse); setNotice({ type: '', text: '' });
    } catch (error) { setNotice({ type: 'error', text: error.message }); } finally { setLoading(false); }
  }, []);

  React.useEffect(() => { loadDashboard(); }, [loadDashboard]);

  function updatePageField(event) { const { name, value } = event.target; setPageForm((current) => ({ ...current, [name]: value })); }

  async function handleCategorySubmit(event) {
    event.preventDefault();
    try { await request('/categories', { method: 'POST', body: JSON.stringify({ name: categoryName, slug: categorySlug }) }); setCategoryName(''); setCategorySlug(''); setNotice({ type: 'success', text: 'Category added successfully.' }); await loadDashboard(); }
    catch (error) { setNotice({ type: 'error', text: error.message }); }
  }

  async function handlePageSubmit(event) {
    event.preventDefault();
    try { await request('/pages', { method: 'POST', body: JSON.stringify(pageForm) }); setPageForm(emptyPage); setNotice({ type: 'success', text: 'Page added successfully.' }); await loadDashboard(); }
    catch (error) { setNotice({ type: 'error', text: error.message }); }
  }

  async function removeCategory(category) {
    if (!window.confirm(`Delete the category "${category.name}"? Pages will remain but lose this category.`)) return;
    try { await request(`/categories/${category.id}`, { method: 'DELETE' }); setNotice({ type: 'success', text: 'Category deleted.' }); await loadDashboard(); }
    catch (error) { setNotice({ type: 'error', text: error.message }); }
  }

  async function removePage(page) {
    if (!window.confirm(`Delete the page "${page.title}"? This also removes its gallery images.`)) return;
    try { await request(`/pages/${page.id}`, { method: 'DELETE' }); setSelectedPage(null); setNotice({ type: 'success', text: 'Page deleted.' }); await loadDashboard(); }
    catch (error) { setNotice({ type: 'error', text: error.message }); }
  }

  return (
    <main className="app-shell">
      <header className="topbar"><div><p className="eyebrow">Symposium control desk</p><h1>Manage your website data</h1><p className="intro">Use the forms and buttons below to manage API-backed content. No terminal commands required.</p></div><button className="secondary-button" type="button" onClick={loadDashboard} disabled={loading}>{loading ? 'Refreshing...' : 'Refresh data'}</button></header>
      {notice.text && <div className={`notice ${notice.type}`}>{notice.text}</div>}

      <section className="status-grid" aria-label="System status">
        <article className="status-card status-live"><span className="status-dot" /><div><span className="label">Backend</span><strong>{health?.status === 'ok' ? 'Online' : 'Unavailable'}</strong></div><small>{health?.timestamp ? new Date(health.timestamp).toLocaleString() : 'Waiting for response'}</small></article>
        <article className="status-card"><span className="metric">{dbStatus?.tables?.pages ?? '-'}</span><div><span className="label">Pages</span><strong>Published records</strong></div></article>
        <article className="status-card"><span className="metric">{dbStatus?.tables?.categories ?? '-'}</span><div><span className="label">Categories</span><strong>Available groups</strong></div></article>
        <article className="status-card"><span className="metric">{dbStatus?.tables?.media ?? '-'}</span><div><span className="label">Media</span><strong>Stored assets</strong></div></article>
      </section>

      <section className="workspace-grid">
        <article className="panel"><div className="panel-heading"><div><p className="eyebrow">Content</p><h2>Add a category</h2></div><span className="panel-number">01</span></div><form onSubmit={handleCategorySubmit}><label>Category name<input value={categoryName} onChange={(event) => setCategoryName(event.target.value)} placeholder="For example: Education" required /></label><label>Slug <span className="hint">optional</span><input value={categorySlug} onChange={(event) => setCategorySlug(event.target.value)} placeholder="education" /></label><button className="primary-button" type="submit">Add category</button></form></article>
        <article className="panel"><div className="panel-heading"><div><p className="eyebrow">Content</p><h2>Add a page</h2></div><span className="panel-number">02</span></div><form className="page-form" onSubmit={handlePageSubmit}>
          <label>Page title<input name="title" value={pageForm.title} onChange={updatePageField} placeholder="Project or solution name" required /></label><label>URL slug <span className="hint">optional</span><input name="slug" value={pageForm.slug} onChange={updatePageField} placeholder="project-name" /></label><label>Category<select name="categoryId" value={pageForm.categoryId} onChange={updatePageField}><option value="">No category</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label><label>Short description<textarea name="description" value={pageForm.description} onChange={updatePageField} rows="2" placeholder="A short summary" /></label><label>Full description<textarea name="fullDescription" value={pageForm.fullDescription} onChange={updatePageField} rows="3" placeholder="Detailed page content" /></label>
          <div className="form-row"><label>Location<input name="locationName" value={pageForm.locationName} onChange={updatePageField} placeholder="City, country" /></label><label>Image URL<input name="image" value={pageForm.image} onChange={updatePageField} placeholder="/images/project.jpg" /></label></div><div className="form-row"><label>Coordinates<input name="locationCoordinates" value={pageForm.locationCoordinates} onChange={updatePageField} placeholder="Latitude, longitude" /></label><label>Maps URL<input name="locationMapsUrl" value={pageForm.locationMapsUrl} onChange={updatePageField} placeholder="https://maps.google.com/..." /></label></div><label>Video URL <span className="hint">optional</span><input name="videoLink" value={pageForm.videoLink} onChange={updatePageField} placeholder="https://youtube.com/..." /></label><button className="primary-button" type="submit">Add page</button>
        </form></article>
      </section>

      <section className="data-grid"><article className="panel table-panel"><div className="panel-heading"><div><p className="eyebrow">Database</p><h2>Pages</h2></div><span className="count-badge">{pages.length}</span></div>{pages.length === 0 ? <p className="empty">No pages found.</p> : <div className="record-list">{pages.map((page) => <div className="record" key={page.id}><div><strong>{page.title}</strong><span>{page.category || 'Uncategorized'} · /{page.slug}</span></div><div className="record-actions"><button className="link-button" type="button" onClick={() => setSelectedPage(page)}>View</button><button className="delete-button" type="button" onClick={() => removePage(page)}>Delete</button></div></div>)}</div>}</article><article className="panel table-panel"><div className="panel-heading"><div><p className="eyebrow">Database</p><h2>Categories</h2></div><span className="count-badge">{categories.length}</span></div><div className="record-list">{categories.map((category) => <div className="record" key={category.id}><div><strong>{category.name}</strong><span>/{category.slug}</span></div><button className="delete-button" type="button" onClick={() => removeCategory(category)}>Delete</button></div>)}</div></article></section>

      {selectedPage && <section className="detail-panel"><div><p className="eyebrow">Selected page</p><h2>{selectedPage.title}</h2><p>{selectedPage.full_description || selectedPage.description || 'No description provided.'}</p></div><button className="secondary-button" type="button" onClick={() => setSelectedPage(null)}>Close details</button></section>}
      <section className="readout-grid"><article className="readout"><span className="label">Gallery images</span><strong>{galleryImages.length}</strong><small>Available through GET /api/gallery-images</small></article><article className="readout"><span className="label">Speakers</span><strong>{siteData?.speakers?.length ?? 0}</strong><small>Available through GET /api/data</small></article><article className="readout"><span className="label">Conferences</span><strong>{siteData?.conferences?.length ?? 0}</strong><small>Available through GET /api/data</small></article><article className="readout"><span className="label">Media files</span><strong>{media.length}</strong><small>Available through GET /api/media</small></article></section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
