import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfilScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={45} color="#176B3A" />
        </View>

        <Text style={styles.name}>Wahyu</Text>

        <Text style={styles.email}>wahyu@email.com</Text>

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={16} color="#176B3A" />

          <Text style={styles.editText}>Edit Profil</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Akun</Text>

      <MenuItem icon="person-outline" title="Informasi Profil" />

      <MenuItem icon="lock-closed-outline" title="Ubah Password" />

      <MenuItem icon="notifications-outline" title="Notifikasi" />

      <MenuItem icon="help-circle-outline" title="Bantuan" />

      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace("/auth/login")}
      >
        <Ionicons name="log-out-outline" size={20} color="#D9534F" />

        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Bedengan Reserve v1.0.0</Text>
    </ScrollView>
  );
}

function MenuItem({
  icon,
  title,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}) {
  return (
    <TouchableOpacity style={styles.menu}>
      <View style={styles.menuIcon}>
        <Ionicons name={icon} size={20} color="#176B3A" />
      </View>

      <Text style={styles.menuTitle}>{title}</Text>

      <Ionicons name="chevron-forward" size={18} color="#94A29A" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F3",
  },

  content: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 40,
  },

  profileHeader: {
    backgroundColor: "white",
    borderRadius: 28,
    alignItems: "center",
    padding: 25,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E4F3E9",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    color: "#19352A",
    fontSize: 23,
    fontWeight: "800",
    marginTop: 12,
  },

  email: {
    color: "#7A8981",
    marginTop: 4,
  },

  editButton: {
    marginTop: 15,
    backgroundColor: "#E4F3E9",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 9,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },

  editText: {
    color: "#176B3A",
    fontWeight: "700",
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#19352A",
    marginTop: 28,
    marginBottom: 12,
  },

  menu: {
    height: 64,
    backgroundColor: "white",
    borderRadius: 17,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#E7F2EA",
    alignItems: "center",
    justifyContent: "center",
  },

  menuTitle: {
    flex: 1,
    marginLeft: 13,
    color: "#344F41",
    fontSize: 14,
    fontWeight: "600",
  },

  logout: {
    height: 58,
    borderRadius: 17,
    backgroundColor: "#FFF0EF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
  },

  logoutText: {
    color: "#D9534F",
    fontWeight: "800",
  },

  version: {
    textAlign: "center",
    color: "#9AA8A1",
    fontSize: 11,
    marginTop: 25,
  },
});
