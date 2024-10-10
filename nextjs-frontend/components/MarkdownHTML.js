import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownHTML = ({ markdown }) => {
  return (
    <div className='prose max-w-none'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownHTML;
