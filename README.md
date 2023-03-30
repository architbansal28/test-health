
The `App` component is the top-level component that renders the `Bodyparts` and `Exercises` components. 

The `Bodyparts` component fetches the list of body parts from the API and renders a dropdown menu for selecting a body part. When the user selects a body part, the `onBodypartChange` function is called with the selected value. 

The `Exercises` component receives the selected body part as a prop and fetches the list of exercises for that body part from the API. It then renders the list of exercises as a bulleted list.