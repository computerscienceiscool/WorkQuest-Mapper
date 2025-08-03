
// WorkAdventure Map Script
// Add custom interactions here

console.log('Welcome to your custom WorkAdventure map!');

// Example: Add welcome message
WA.onEnterZone('spawn', () => {
    WA.chat.sendChatMessage('Welcome to BBS!', 'System');
});

// Example: Focus zone interaction
WA.onEnterZone('focusZone', () => {
    WA.chat.sendChatMessage('You entered the focus zone - quiet workspace', 'System');
});
