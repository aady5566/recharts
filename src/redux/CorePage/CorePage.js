import React,{ Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import Body from './Body.js';
// 選了第三個按鈕推薦夥伴後的結果圖
import BarTop5Pa2Pr from './BarTop5Pa2Pr.js';
// 選了第四個按鈕推薦產品後的結果圖
import RecomBarPa2Pr from './RecomBarPa2Pr.js';
import ReasonTablePa2Pr from './ReasonTablePa2Pr.js';


class CorePage extends Component{
  render(){
    const hs2 = this.props.hs2.substr( 0 , 2);
    return(
      <div>
        <h1>CorePage</h1>

        <Link to="/core_homepage"><input type="button" value="上一頁"/></Link>
        <Link to="/core_page/Product"><input type="button" value="Product"/></Link>
        <Link to="/core_page/Partner"><input type="button" value="Partner"/></Link>

        <Body/>

        <h4>來源國：{this.props.reporter}</h4>
        <h4>選擇hs2：{hs2}</h4>
        <h4>選擇出口國：{this.props.partner}</h4>
        <h4>選擇推薦hs6：{this.props.hs6}</h4>


        <div>
          <h3>測試第三個按鈕圖</h3>
          {/*<BarTop5Pa2Pr reporter={this.props.reporter} hs2={hs2} partner={this.props.partner}/>
         <BarTop5Pa2Pr hs2={hs2} partner={this.props.partner}/>*/}
          <BarTop5Pa2Pr reporter={this.props.reporter} hs2={hs2} partner={this.props.partner}/>
          <h3>第四選項選完後的圖表 partner 2 product - bar</h3>
          <RecomBarPa2Pr reporter={this.props.reporter} hs2={hs2} partner={this.props.partner} hs6={this.props.hs6}/>
            {/*NOTE
              <RecomPiePa2Pr2Top5Pa/>先寫在 RecomBarPa2Pr 內
              因為要吃 推薦結果的參數 （一層）
            */}
          <h4>第四選項選完後的圖表 partner 2 product - table</h4>
          <ReasonTablePa2Pr reporter={this.props.reporter} hs2={hs2} partner={this.props.partner} hs6={this.props.hs6}/>
        </div>
      </div>
    );
  }
}


  function mapStateToProps(state) {
    return {
      reporter: state.reporter,
      hs2:state.hs2,
      partner:state.partner,
      hs6:state.hs6
    };
  }

  export default connect(mapStateToProps)(CorePage);
