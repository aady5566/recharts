import React,{ Component } from 'react';
import { Link } from 'react-router';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// 匯入data
import CountryDATA from '../data/reporter.js';
import Hs2DATA from '../data/hs2.js';
import PartnerDATA from '../data/partner.js';
import Hs6DATA from '../data/hs6.js';


//這邊寫從action呼叫的東西
import { selectnewCountry, selectnewHs2, selectnewHs6, selectnewPartner } from '../actions/index';

class HomeCorePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      country: 'country',
      hs6: 'hs6',
      partner: 'partner',
      clearable: true,
      selectCountryValue: '',
      selectHs2Value: '',
      selectPartnerValue: '',
      selectHs6Value: '',
    }
  }
  selectCountry = (newCountry) => {
    this.setState({
      selectCountryValue: newCountry,
    });
    this.props.selectnewCountry(newCountry)
  }
  selectHs2 = (newHs2) => {
    this.setState({
      selectHs2Value: newHs2,
    });
    this.props.selectnewHs2(newHs2)
  }
  selectPartner = (newPartner) => {
    this.setState({
      selectPartnerValue: newPartner,
    });
    this.props.selectnewPartner(newPartner)
  }
  selectHs6 = (newHs6) => {
    this.setState({
      selectHs6Value: newHs6,
    });
    this.props.selectnewHs6(newHs6)
  }

  render(){
    const countrydata = CountryDATA[this.state.country];
    const hs2data = Hs2DATA[this.state.selectCountryValue];
    const partnerdata = PartnerDATA[this.state.partner]
    const hs6data = Hs6DATA[this.state.hs6];
    return(
      <div>
        <div className="sidebar_reporter">
          <Select options={countrydata}
                  simpleValue
                  clearable={this.state.clearable}
                  onChange={this.selectCountry}
                  value={this.state.selectCountryValue}
                  placeholder='選擇國家'
                  />
        </div>
        <div className="sidebar_hs2">
            <Select options={hs2data}
                    simpleValue
                    clearable={this.state.clearable}
                    onChange={this.selectHs2}
                    value={this.state.selectHs2Value}
                    placeholder='選擇Hs2碼'
                    />
        </div>
        <div className="sidebar_partner">
            <Select options={partnerdata}
                    simpleValue
                    clearable={this.state.clearable}
                    onChange={this.selectPartner}
                    value={this.state.selectPartnerValue}
                    placeholder='選擇推薦Partner'
                    />
        </div>
        <div className="sidebar_hs6">
            <Select options={hs6data}
                    simpleValue
                    clearable={this.state.clearable}
                    onChange={this.selectHs6}
                    value={this.state.selectHs6Value}

                    placeholder='選擇推薦Hs6碼'
                    />
        </div>
        <h4>當下setState-reporter:{this.state.selectCountryValue}</h4>
        <h4>當下setState-hs2:{this.state.selectHs2Value}</h4>
        <h4>當下setState-partner:{this.state.selectPartnerValue}</h4>
        <h4>當下setState-hs6:{this.state.selectHs6Value}</h4>
        <Link to="/core_page"><input type="button" value="送出" /></Link>
      </div>
    );
  }
}

// Input 我們的值 ，mapStateToProps 沒有用到
function mapStateToProps(state) {
  return {

  };
}
//output 我們的值
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectnewCountry, selectnewHs2, selectnewPartner, selectnewHs6 }, dispatch);
}

//connect當前頁面(HomeCorePage)
export default connect(mapStateToProps, mapDispatchToProps)(HomeCorePage);
