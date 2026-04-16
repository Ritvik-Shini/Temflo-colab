import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
            <Image
                src="/images/logo/TSPL-Logo.png"
                alt="logo"
                width={68}
                height={22}
                style={{ width: '68', height: '22' }}
                quality={100}
                className='dark:hidden'
            />
            <Image
                src="/images/footer/TSPL-Logo.png"
                alt="logo"
                width={68}
                height={22}
                style={{ width: '68', height: '22' }}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
