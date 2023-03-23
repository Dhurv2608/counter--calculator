import React from 'react'

const Calculator = () => {
  return (
    <div>
   <section className="m-auto">
  <div className="container mt-5">
    <div className="border">
      <div className="fone ">
        <form className="form">
          <div className="fone_sencer" />
          <input id="calculation" className=" fone_input fs-4  border-0 text-light" name="ans" type="text" />
          <table style={{margin: '0 10px'}}>
            <tbody><tr>
                <td><button className="btn ccal_button" type="button" onclick="cleardata()"><b>AC</b></button></td>
                <td><button className="btn ccal_button" type="button" onclick="form.ans.value = form.ans.value.slice(0,-1)"><img src="image/backspace.png" width="16px" alt /></button></td>
                <td><button className="btn ccal_button" type="button" onclick="form.ans.value += '%'"><b>%</b></button></td>
                <td><button className="btn cal_button oreng_btn text-light" type="button" onclick="form.ans.value += '/'"><b>/</b></button></td>
              </tr>
              <tr>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '7'"><b>7</b></button></td>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '8'"><b>8</b></button></td>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '9'"><b>9</b></button></td>
                <td><button className="btn cal_button oreng_btn text-light" type="button" onclick="form.ans.value += '*'"><b>*</b></button></td>
              </tr>
              <tr>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '4'"><b>4</b></button></td>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '5'"><b>5</b></button></td>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '6'"><b>6</b></button></td>
                <td><button className="btn cal_button oreng_btn text-light" type="button" onclick="form.ans.value += '-'"><b>-</b></button></td>
              </tr>
              <tr>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '1'"><b>1</b></button></td>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '2'"><b>2</b></button></td>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '3'"><b>3</b></button></td>
                <td><button className="btn cal_button oreng_btn text-light" type="button" onclick="form.ans.value += '+'"><b>+</b></button></td>
              </tr>
              <tr>
                <td colSpan={2}><button className="btn btn-width_extra text-light cal_button " type="button" onclick="form.ans.value += '0'"><b>0</b></button></td>
                <td><button className="btn text-light cal_button" type="button" onclick="form.ans.value += '.'"><b>.</b></button></td>
                <td><button className="btn cal_button oreng_btn text-light" type="button" onclick="form.ans.value = eval(form.ans.value)"><b>=</b></button></td>
              </tr>
            </tbody></table>
          <div className="pone-line" />
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Calculator
