export type TopProps = {
    name?: string;
    //career は月数(〇ヶ月)で記述
    career?: number;
    langs?: string[];
    id?: string;
    title?: string;
    text?: React.ReactElement;
    sections?: { id: string; title: string; text: React.ReactElement; date: string; }[];
}

export type AnimationProps = {
  children: React.ReactNode;
  animate?: boolean;
  trigger?: boolean;
  duration?: number;
  delay?: number;
};

export type SkillCircleProps = {
    percent: number;
    label: string;
    colors?: {
        main: string;    // メイン色
        accent: string;  // アクセント色
        bg: string;      // 背景色
    };
};

export type ScrollableTextProps = {
    children: React.ReactNode;
    maxLines?: number; // デフォルト20行
};