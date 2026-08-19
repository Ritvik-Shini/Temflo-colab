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
          <span 
          className="ml-[15px] font-bold text-[20px] text-[#883FFC] max-sm:text-[11px] max-sm:leading-tight inline-block"
           >
           Temflo Systems <br />Private Limited
           </span>
            </div> 
        </Link>
    );
};

export default Logo;
