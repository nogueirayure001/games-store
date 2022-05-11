import CarrosselFrame from "../carrossel-frame/carrossel-frame";
import "./carrossel-multi-frame.scss";

function CarrosselMultiFrame({ children, configs }) {
  return (
    <div className='carrossel-multi-frame-container'>
      <div className='frame-container'>
        <CarrosselFrame {...configs}>{children}</CarrosselFrame>
      </div>

      <div className='frame-container'>
        <CarrosselFrame {...configs}>{children}</CarrosselFrame>
      </div>

      <div className='frame-container'>
        <CarrosselFrame {...configs}>{children}</CarrosselFrame>
      </div>
    </div>
  );
}

export default CarrosselMultiFrame;
