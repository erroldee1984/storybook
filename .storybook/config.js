import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css';

const loadStories = () => {
    const allExports = [];
    const req = requireContext('../src/components', true, /\.stories\.js$/);
    req.keys().forEach(filename => allExports.push(req(filename)));
    return allExports;
};

configure(loadStories, module);