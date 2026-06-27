"use client";

import { useState } from 'react';
import { FaTwitter, FaLinkedin, FaLink } from 'react-icons/fa';

export default function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);

  const shareToTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareToLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={shareToTwitter}
        className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-[#1DA1F2] hover:text-[#1DA1F2]"
        aria-label="Share on Twitter"
      >
        <FaTwitter className="h-4 w-4" />
        Twitter
      </button>
      <button
        onClick={shareToLinkedIn}
        className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-[#0A66C2] hover:text-[#0A66C2]"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin className="h-4 w-4" />
        LinkedIn
      </button>
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-neutral-950 hover:text-neutral-950"
        aria-label="Copy link to clipboard"
      >
        <FaLink className="h-4 w-4" />
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}