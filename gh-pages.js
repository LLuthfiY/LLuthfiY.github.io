import { publish } from 'gh-pages';

publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/LLuthfiY/LLuthfiY.github.io', // Update to point to your repository
        user: {
            name: 'Luthfi', // update to use your name
            email: 'mluthfia00@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);