import Link from 'next/link';

const TagButton = ({ tag }) => {
  return (
    <Link href={"/"} aria-label="Tag Button">
      <button
        className={`px-4 py-2  ${
          tag.selected
            ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
            : 'borderGrd text-[#999999]'
        } rounded-2xl  text-xs font-fira-code`}
      >
        {tag}
      </button>
    </Link>
  );
};

export default TagButton;
