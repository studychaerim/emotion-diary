const MyButton = ({text, type, onClick}) => { // App.js에서 받은 props
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default'

  return (
    <button className={['MyButton',`MyButton_${btnType}`].join(' ')} onClick={onClick}>
      {text}
    </button>
  )
}

MyButton.defaultProps = {
  type: 'default',
}

export default MyButton;