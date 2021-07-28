import './styles.css';

const Calculator = () => {
  return (
    <div className="calculator-app">
      <div className="visor">
        <span> 0 </span>
      </div>

      <div className="calculator-btns">
        <button className="calc-btn escuro"> AC </button>
        <button className="calc-btn escuro"> +/- </button>
        <button className="calc-btn escuro"> % </button>
        <button className="calc-btn laranja"> / </button>

        <button className="calc-btn"> 7 </button>
        <button className="calc-btn"> 8 </button>
        <button className="calc-btn"> 9 </button>
        <button className="calc-btn laranja"> x </button>

        <button className="calc-btn"> 4 </button>
        <button className="calc-btn"> 5 </button>
        <button className="calc-btn"> 6 </button>
        <button className="calc-btn laranja"> - </button>

        <button className="calc-btn"> 1 </button>
        <button className="calc-btn"> 2 </button>
        <button className="calc-btn"> 3 </button>
        <button className="calc-btn laranja"> + </button>

        <button id="zero" className="calc-btn"> 0 </button>
        <button className="calc-btn"> . </button>
        <button className="calc-btn laranja"> = </button>
      </div>
    </div>
  )
}
export { Calculator };