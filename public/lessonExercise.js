// the code below creates a component called UserForm. Currently, it's a functional Component.

// ReFactor the "UserForm" to be a class-based component returning the exact same JSX.
// Remember a class-based component must:
            // Be a JavaScript class
            // Extend React.Component
            // Implement a render method that returns some JSX. 

<script type="text/babel" data-presets="env,react">
    const UserForm = () => {
        return (
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
        );
    }


    {/* // Renders the App component into a div with id 'root' */}
    ReactDOM.render(<UserForm />, document.querySelector('#root'));
</script>






//<!--The App component above will be rendered into this-->
<div id="root"></div>


// <!--No need to change anything after this line!-->
// <!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/redux@4.0.1/dist/redux.js"></script>
<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />