import { AddNoteModal } from "@/components/add-note-modal";
import { NoteList } from "@/components/note-list";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface Note {
  id: string;
  text: string;
}

export default function NoteScreen() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      text: "Note One",
    },
    {
      id: "2",
      text: "Note Two",
    },
    {
      id: "3",
      text: "Note Three",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState<string>("");

  const addNote = () => {
    if (!newNote) return;

    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now.toString(), text: newNote },
    ]);

    setNewNote("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <NoteList notes={notes} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
