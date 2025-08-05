import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
import { Children } from 'react';

    const cx = classNames.bind(styles)

function DefaultLayout({children}) {



    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
