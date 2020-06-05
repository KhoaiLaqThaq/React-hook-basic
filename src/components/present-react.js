import React, { useState } from 'react';
import SlideImg from './../assets/image/slide-react-hook.png';
import ReactHookImg from './../assets/image/react-hook.png';
import OOPFP from './../assets/image/oop-fp.png';

const titleArr = [{
    title: 'React hooks là gì? (What)',
    isAsk: false
}, {
    title: 'Khi nào dùng hooks? (When)',
    isAsk: false
}, {
    title: 'Ai thích sử dụng hooks? (Who)',
    isAsk: false
}, {
    title: 'Tại sao nên dùng hooks? (Why)',
    isAsk: false
}, {
    title: 'Sử dụng hooks như thế nào? (How)',
    isAsk: false
}, {
    title: 'React hooks sinh ra để bỏ đi class component, đúng hay sai?',
    isAsk: true
}, {
    title: 'Có nên viết lại code lifecycle thành hooks không?',
    isAsk: true
}];

function PresentComponent() {
    return (
        <>
            <div className={"row"}>
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <img src={SlideImg} width="75%" alt=""/>
                        </div>
                        <ol>
                            {
                                titleArr.map((data, key) => {
                                    return (
                                        <li key={key} className="text-dark">
                                            <span className="text-danger font-weight-bold">{data.isAsk && '?'}</span> <span>{data.title}</span>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>1. React hooks là gì? (What)</h2>
                    <div className="row mb-3">
                        <ul>
                            <li>Feature mới được add vào từ version 16.8 của React.</li>
                            <li>Giúp mình có thể dùng state, lifecycle và các features khác của React mà không cần dùng tới class component.</li>
                            <li>Hooks có thể hiểu nôm na là một cái function được hook-into vào các features của React và sẽ được gọi khi cần thiết.</li>
                            <li>Mặt mũi nó trông ra sao?</li>
                        </ul>
                        <div className="col-12">
                            <img src={ReactHookImg} alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <h2>2. Khi nào dùng hooks</h2>
                    <div className="row">
                        <ul>
                            <li>Khi muốn dùng state, lifecycle,...  mà không thích làm việc với class (OOP).</li>
                            <li><strong>NHỚ:</strong> Chỉ sử dụng được cho functional component, không dùng cho class.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <h2>3. Ai thích sử dụng hooks? (Who)</h2>
                    <div className="row mb-3">
                        <ul>
                            <li>OOP vs FB (cuộc chiến không hồi kết thúc).</li>
                            <li>Không thể là ai khác ngoài tín đồ Functional Programming.</li>
                        </ul>
                        <div className="col-12">
                            <img src={OOPFP} width="75%" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <h2>4. Tại sao nên dùng hooks? (Why)</h2>
                    <div className="row">
                        <ul>
                            <li>No breaking changes.</li>
                            <li>Có thể dùng vừa class component, vừa dùng thử nghiệm react hooks cho components mới.</li>
                            <li>Loại bỏ rào cản OOP. (this, super(props),...)</li>
                            <li>Không có kế hoạch để bỏ class component.</li>
                            <li>Không xóa bỏ kiến thức đã biết về React: state, lifecycle, context,...</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <h2>5. Sử dụng hooks như thế nào? (how)</h2>
                    <div className="row">
                        <ul>
                            <li>useState()</li>
                            <li>useEffect()</li>
                            <li>useContext()</li>
                            <li>useReducer()</li>
                            <li>useSelector(), useDispatch()</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <h2>6. <strong className="text-danger">?</strong> React hooks sinh ra để bỏ đi class component, đúng hay sai?</h2>
                    <div className="row">
                        <ul>
                            <li>SAI.</li>
                            <li>React hooks không có bỏ những kiến thức mà bạn đã biết về React như: state, lifecycle, props,...</li>
                            <li>Không có kế hoạch để bỏ class component.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <h2>7. <strong className="text-danger">?</strong> Có nên viết lại code lifecycle thành hooks không?</h2>
                    <div className="row">
                        <ul>
                            <li>Tùy mọi người. Nhưng khuyến khích không nên</li>
                            <li>Chỉ refactor lại những component quá phức tạp.</li>
                            <li>Thử nghiệm với component mới.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PresentComponent;