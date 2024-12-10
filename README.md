# Board Game Catalog

This project is a simple Board Games Catalog where you can manage your games collection. You can add new games and delete old ones.

You can use various filters to browse your collection. All filters work in parallel - that means you can search games from one publisher by year.

The project is built with the Next.js framework, using TypeScript and TailwindCSS, and is hosted on Firebase.

## Future Improvements

- **UI**: This has never been my strongest side - I prioritize clean design here
- **UX**: Interactions with the app can be more pleasant; adding shadows under elements, micro-animations, and loading indicators would definitely improve user experience
- **Responsive design**: The app scales well for desktop and tablet but looks poor on mobile devices due to time constraints
- **Implement authorization**: Currently, anyone with access to the app can add and modify games
- **Implement lazy loading or pagination** for long lists of games
- **Make filters panel sticky** when scrolling through a long list
- **Add advanced form validations**
- **Implement user-friendly error handling**
- **Add unit tests**

## Known Bugs

- Top bar disappears when scrolling far down
- When adding an expansion to a previously created Base Game, the Expansion is not associated with the Base Game
- Deleting games added through the app doesn't work
