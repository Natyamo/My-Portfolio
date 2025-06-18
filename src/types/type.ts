
export type TopProps = {
    name?: string;
    //career は月数(〇ヶ月)で記述
    career?: number;
    langs?: string[];
    id?: string;
    title?: string;
    text?: string;
    sections?: { id: string; title: string; text: string; date: string; }[];
}