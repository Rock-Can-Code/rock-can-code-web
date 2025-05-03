import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`${markdownStyles["markdown"]} text-justify`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
