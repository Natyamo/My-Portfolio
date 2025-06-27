import { ScrollableTextProps } from "@/types/type";
 
// 汎用スクロールテキストコンポーネント

const ScrollableText: React.FC<ScrollableTextProps> = ({ children, maxLines = 20 }) => (
    <div
        style={{
            maxHeight: `${maxLines}em`,
            overflowY: "auto",
            paddingRight: "8px",
        }}
    >
        {children}
    </div>
);

export default ScrollableText;