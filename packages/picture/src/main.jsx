// import React from "react"
import { memo } from "react"
import './index.css'

const Pic = () => {
    return <div className="pic-wrap">
        <div>09999</div>
        <img src='https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/github.46c47564.png'/>
        <h1>maxSize</h1>
        <div className="max-size"></div>
    </div>
}
export default memo(Pic)