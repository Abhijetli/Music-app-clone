Introduction:
- It Describes the basic building of Music Player with search Operation .
- React JS, Boostrap CSS, Material UI is Used In This Project.
- You get to Learn a lot about Frontend Development from this

Section 1: Setting Up the Project

1.1 Creating a New React App:
- Use `create-react-app` to set up a new React application.
- MVP Structure is used with multiple files Pages,Components and Services

1.2 Adding Material-UI:
- Install Material-UI and its dependencies.
- Set up the `ThemeProvider` and `CssBaseline` for consistent styling.

Section 2: Building the Search Functionality

2.1 Creating the Search Component:
- Set up the `Search` component for users to search for songs.
- ‘useState’ has been used here alot of time to set the state of the components and ‘useRef’ is used here to handle the “Enter” key press event for submitting the search request, along with the “Submit” button click event.

2.2 Fetching Song Data:
- Implement the API call to retrieve song data based on user search.
- Use the `useState` hook to manage the fetched song data.


Section 3: Displaying Songs and Playback

3.1 Designing the Song Card:
- Create a reusable `Song` component to display individual songs as cards.
- Utilize Material-UI components for card layout and styling.

3.2 Playing Songs:
- Set up the song playback feature using the `Player` component.
- Song Selection is done by using hooks by setting it a state and using flag to change it according on the button press.


Section 4: Implementing Dark Mode

4.1 Defining Dark Mode Styles:
- Create a dark mode theme using Material-UI’s `createTheme`.
- Create the Dark mode pallete using Material.ui

4.2 Toggling Dark Mode:
- Use the `ThemeProvider` to apply the selected theme.


Section 5: User Authentication (Optional)

5.1 Designing the Login Page:
- Create a `LoginPage` component for user authentication.
- Input fields and Labels have been created with basic CSS and Boostrap

5.2 Handling Authentication:
- Implement authentication logic using `useState` hooks.
- Use conditional rendering to show different pages based on login status.


Conclusion: Wrapping Up the Music Player App

Acknowledgments and References:

-used axios library
-https://getbootstrap.com/
-https://mui.com/material-ui/

Website Link :https://soulwaxmusic.netlify.app/
