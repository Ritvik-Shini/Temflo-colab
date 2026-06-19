import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
          <div style={{
            display: 'flex',
            flexDirection: 'row',
             alignItems: 'center'
         }}>
             <Image
                src="/images/logo/TSPL-Logo.png"
                alt="logo"
                width={68}
                height={22}
                style={{ width: '68', height: '22' }}
                quality={100}
                className='dark:block'
            />
            <span style={{ marginLeft: '15px', fontSize: '20px', fontWeight: 'bold', color: '#883FFC' }}>
            Temflo Systems <br></br>Pvt. Ltd.
               </span>
            </div> 
        </Link>
    );
};

export default Logo;
