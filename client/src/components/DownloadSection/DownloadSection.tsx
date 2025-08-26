import './DownloadSection.scss';

const DownloadSection = () => {
    return (
        <section className="download-section" id="our-menu-point">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="download-container">
                            <h2 className="download-container__headline scroll-animate">Download our menu</h2>
                            <div className="download-container__button-wrap scroll-animate">
                                <a href="#popup_download" className="button popup-link">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;