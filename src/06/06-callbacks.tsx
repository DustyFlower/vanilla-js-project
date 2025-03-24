import {ChangeEvent, MouseEvent} from 'react'

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name);
     //   alert('User has been deleted.');
    }

    const onNameChanged = () => {
        console.log('name changed');
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value);
    }

    const focusLostHandler = () => {
        console.log('focus lost');
    }

    return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}>Dimych</textarea>
        <input type={'number'} onChange={onAgeChanged}/>
        <button name ='delete' onClick={search}>search</button>
    </div>
}