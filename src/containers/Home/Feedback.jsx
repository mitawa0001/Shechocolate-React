import StarIcon from '@material-ui/icons/Star';
import "./style.css"
const Feedback = () => {
    return (
        <>
            <div className="container ">
                <div className='d-flex justify-content-center'>
                    <div className="col-lg-9 col-md-12">
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="col-lg-6 col-md-12 text-center px-lg-3 ">
                                <div className='py-2'>
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                </div>
                                <h3 className='py-1'>LINDA</h3>
                                <p>I recently purchased an embroidered dress from a She Chocolate, and I am absolutely in love with it! The intricate embroidery adds such a unique and beautiful touch to the garment. The attention to detail is remarkable, and
                                    I have received numerous compliments every time I wear it."</p>
                            </div>
                            <div className="col-lg-6 col-md-12 text-center px-lg-3 ">
                                <div className='py-2'>
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                    <StarIcon color="#dbcac0" fontSize="medium" />
                                </div>
                                <h3 className='py-1'>LINDA</h3>
                                <p>I recently purchased an embroidered dress from a She Chocolate, and I am absolutely in love with it! The intricate embroidery adds such a unique and beautiful touch to the garment. The attention to detail is remarkable, and
                                    I have received numerous compliments every time I wear it."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feedback;