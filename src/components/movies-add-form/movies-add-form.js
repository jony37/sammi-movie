import '../movies-add-form/movies-add-form.css'

const MoveAddForm = () => {
  return (
    <div className='movies-add-form'>
        <h3>Yangi kino qoshish</h3>
        <form action= "" className='add-form d-flex'>
            <input type="text" className='form-control new-post-label' placeholder='Qanday kino? '/>
            <input type="number" className='form-control new-post-label' placeholder='Nechi marotaba korilgan?'/>
            <button type='button' className='btn btn-outline-dark'>
                Qoshish
            </button>
        </form>
    </div>
  )
}

export default MoveAddForm
