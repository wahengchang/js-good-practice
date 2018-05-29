const clickHandler = field => (event) => {
    console.log(`click ${field}: ${event.value}`)
}

<button onclick={clickHandler('name')}> Name <button />
<button onclick={clickHandler('id')}> Id <button />