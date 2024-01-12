
import gallery1 from "../../image/galery 1.webp"
import gallery2 from "../../image/galery 2.webp"
import gallery3 from "../../image/galery 3.webp"
import gallery4 from "../../image/alery 4.webp"
const gallery = () => {
    return (
        <>
            <div className="container py-5">
                <div className=" d-flex flex-wrap">
                    <div className="col-lg-5 col-md-6 p-lg-3">
                        <img src={gallery1} alt="woman 1" width="100%" height="100%"></img>
                    </div>
                    <div className="col-lg-7 col-md-6 py-3">
                        <img src={gallery2} alt="woman 1" width="100%" height="100%"></img>
                    </div>
                </div>
                <div className=" d-flex flex-wrap">
                    <div className="col-lg-7 col-md-6 px-lg-3">
                        <img src={gallery3} alt="woman 1" width="100%" height="100%"></img>
                    </div>
                    <div className="col-lg-5 col-md-6 my-md-3">
                        <img src={gallery4} alt="woman 1" width="100%" height="100%"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default gallery;