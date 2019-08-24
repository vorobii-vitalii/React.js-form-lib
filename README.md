# Simple form library based on React.js
### If you use that library - you are likely to miss some lines of code while dealing with forms
### And about to use form components in PascalCase naming convention, which is (imho) preffered for React.js coding...

## Usage

```js
import {InputText,TextArea,InputCheckBox,InputRadio,InputSelect,Option,Form} from './form_lib/FormLib'

const FormText=({value,onSubmit})=>(
    <Form onSubmit={onSubmit}>
        <TextArea value={value} />
    </Form>
)
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!