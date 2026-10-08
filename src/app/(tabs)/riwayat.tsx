import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function RiwayatScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Riwayat
        </Text>

        <Text style={styles.subtitle}>
          Lihat semua reservasi yang pernah kamu lakukan.
        </Text>

        <View style={styles.card}>
          <Text style={styles.code}>
            RSV-20250912-001
          </Text>

          <Text style={styles.location}>
            Camping Ground Pinus Utama
          </Text>

          <Text style={styles.date}>
            12 Sep 2025 - 14 Sep 2025
          </Text>

          <Text style={styles.status}>
            Selesai
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.code}>
            RSV-20250920-003
          </Text>

          <Text style={styles.location}>
            Danau Lembah Hijau
          </Text>

          <Text style={styles.date}>
            20 Sep 2025 - 22 Sep 2025
          </Text>

          <Text style={styles.status}>
            Sedang Berlangsung
          </Text>
        </View>
      </View>
    </ScrollView>
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

  title: {
    fontSize: 29,
    fontWeight: "800",
    color: "#19352A",
  },

  subtitle: {
    color: "#7A8981",
    marginTop: 6,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  code: {
    fontSize: 16,
    fontWeight: "800",
    color: "#19352A",
  },

  location: {
    fontSize: 14,
    color: "#687970",
    marginTop: 8,
  },

  date: {
    fontSize: 12,
    color: "#7D8B84",
    marginTop: 12,
  },

  status: {
    fontSize: 12,
    fontWeight: "700",
    color: "#176B3A",
    marginTop: 15,
  },
});