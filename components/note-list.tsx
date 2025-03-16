import { Note } from "@/app/notes";
import { FlatList } from "react-native";
import { NoteItem } from "./note-item";

export const NoteList = ({ notes }: { notes: Note[] }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item: any) => item.id}
      renderItem={({ item }) => <NoteItem note={item} />}
    />
  );
};
