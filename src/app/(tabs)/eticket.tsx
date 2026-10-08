import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ETicketScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>E-Ticket</Text>

      <Text style={styles.subtitle}>Tiket digital untuk akses ke lokasi.</Text>

      <View style={styles.ticket}>
        <View style={styles.ticketHeader}>
          <View>
            <Text style={styles.smallTitle}>BEDENGAN RESERVE</Text>

            <Text style={styles.campingTitle}>Camping Ground</Text>
          </View>

          <View style={styles.status}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>Aktif</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.location}>Camping Ground Pinus Utama</Text>

        <View style={styles.detailRow}>
          <Detail
            icon="calendar-outline"
            title="Tanggal"
            value="12 - 14 Sep 2026"
          />

          <Detail icon="people-outline" title="Pengunjung" value="2 Orang" />
        </View>

        <View style={styles.qr}>
          <Ionicons name="qr-code" size={150} color="#17221C" />

          <Text style={styles.qrText}>Tunjukkan QR Code saat masuk</Text>
        </View>

        <Text style={styles.booking}>RSV-20260912-001</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="download-outline" size={20} color="white" />

        <Text style={styles.buttonText}>Simpan E-Ticket</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Detail({
  icon,
  title,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
}) {
  return (
    <View style={styles.detail}>
      <Ionicons name={icon} size={19} color="#176B3A" />

      <View>
        <Text style={styles.detailTitle}>{title}</Text>

        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
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

  ticket: {
    backgroundColor: "white",
    borderRadius: 28,
    padding: 22,
  },

  ticketHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallTitle: {
    color: "#7A8981",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },

  campingTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#19352A",
    marginTop: 5,
  },

  status: {
    backgroundColor: "#E4F3E9",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#2E8B57",
  },

  statusText: {
    color: "#397652",
    fontSize: 11,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#E3ECE6",
    marginVertical: 18,
  },

  location: {
    color: "#19352A",
    fontSize: 16,
    fontWeight: "700",
  },

  detailRow: {
    flexDirection: "row",
    marginTop: 20,
    gap: 25,
  },

  detail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  detailTitle: {
    fontSize: 10,
    color: "#87948D",
  },

  detailValue: {
    fontSize: 11,
    color: "#334E40",
    fontWeight: "700",
    marginTop: 2,
  },

  qr: {
    alignItems: "center",
    marginTop: 25,
    backgroundColor: "#F3F8F4",
    padding: 20,
    borderRadius: 22,
  },

  qrText: {
    color: "#718078",
    fontSize: 11,
    marginTop: 10,
  },

  booking: {
    textAlign: "center",
    marginTop: 18,
    fontWeight: "800",
    color: "#19352A",
  },

  button: {
    height: 55,
    backgroundColor: "#176B3A",
    borderRadius: 17,
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    color: "white",
    fontWeight: "800",
  },
});
