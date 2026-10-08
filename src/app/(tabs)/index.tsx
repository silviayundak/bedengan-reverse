import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function DashboardScreen() {
  return (
    // Background Gradient Lembut Khas Gambar 2 (Mint / Pastel Green)
    <LinearGradient
      colors={["#E3F2E6", "#EEF6F0", "#E1EFE4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Top Profile / Header Bar */}
        <View style={styles.topHeaderCard}>
          <View style={styles.greetingContainer}>
            <View style={styles.avatarBox}>
              <Ionicons name="leaf" size={20} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.welcomeSubText}>Selamat datang,</Text>
              <Text style={styles.welcomeTitle}>Lisaa! 👋</Text>
            </View>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.circleBtn} activeOpacity={0.8}>
              <Ionicons
                name="notifications-outline"
                size={18}
                color="#1C352D"
              />
              <View style={styles.notifBadge} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.avatarCircle} activeOpacity={0.8}>
              <Text style={styles.avatarLetter}>A</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section Title & Status update */}
        <View style={styles.sectionTitleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.tagline}>RINGKASAN SISTEM</Text>
            <Text style={styles.mainTitle}>Dashboard</Text>
            <Text style={styles.mainSubtitle}>
              Pantau aktivitas reservasi, pengunjung, dan kondisi lokasi
              Bedengan secara real-time.
            </Text>
            <Text style={styles.dateBadge}>• Data per 24 Sep 2026</Text>
          </View>

          <TouchableOpacity style={styles.refreshBtn} activeOpacity={0.8}>
            <Ionicons name="refresh-outline" size={15} color="#176B3A" />
            <Text style={styles.refreshText}>Perbarui</Text>
          </TouchableOpacity>
        </View>

        {/* Metrics Cards Grid (Glass & Soft Shadow) */}
        <View style={styles.metricsGrid}>
          <MetricCard
            icon="location"
            title="Total Lokasi"
            value="2"
            subtitle="2 lokasi aktif"
          />
          <MetricCard
            icon="calendar"
            title="Total Reservasi"
            value="2"
            subtitle="Seluruh reservasi"
          />
          <MetricCard
            icon="people"
            title="Total Pengunjung"
            value="7"
            subtitle="Pengunjung terdaftar"
          />
          <MetricCard
            icon="pulse"
            title="Sedang Berkunjung"
            value="0"
            subtitle="Pengunjung aktif"
            isLive
          />
        </View>

        {/* Live Monitoring Section */}
        <View style={styles.mainCardSection}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTag}>LIVE MONITORING</Text>
              <Text style={styles.cardSectionTitle}>Kondisi Lokasi</Text>
              <Text style={styles.cardSectionDesc}>
                Pantau kapasitas pengunjung pada setiap lokasi.
              </Text>
            </View>
            <View style={styles.cardIconBox}>
              <Ionicons name="map-outline" size={20} color="#176B3A" />
            </View>
          </View>

          <LocationItem
            name="Area Sungai"
            sub="Bedengan Camping Ground"
            active="0"
            max="100"
            status="Aman"
            price="Rp 10.000 / malam"
            percent={0}
          />

          <LocationItem
            name="Bedengan Camping Ground"
            sub="Bedengan Camping Ground"
            active="0"
            max="100"
            status="Aman"
            price="Rp 10.000 / malam"
            percent={0}
          />
        </View>

        {/* Ringkasan Status Reservasi */}
        <View style={styles.mainCardSection}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTag}>RINGKASAN</Text>
              <Text style={styles.cardSectionTitle}>Status Reservasi</Text>
              <Text style={styles.cardSectionDesc}>
                Kondisi reservasi saat ini.
              </Text>
            </View>
            <View style={styles.cardIconBox}>
              <Ionicons name="ticket-outline" size={20} color="#176B3A" />
            </View>
          </View>

          <View style={styles.statusGrid}>
            <StatusChip label="Booked" count="1" color="#F59E0B" />
            <StatusChip label="Check-In" count="0" color="#10B981" />
            <StatusChip label="Selesai" count="1" color="#3B82F6" />
            <StatusChip label="Dibatalkan" count="0" color="#EF4444" />
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </LinearGradient>
  );
}

// Sub-komponen Metric Card
function MetricCard({
  icon,
  title,
  value,
  subtitle,
  isLive,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
  subtitle: string;
  isLive?: boolean;
}) {
  return (
    <View style={styles.metricCard}>
      {isLive && (
        <View style={styles.liveBadge}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      )}
      <View style={styles.metricIconBg}>
        <Ionicons name={icon} size={20} color="#FFFFFF" />
      </View>
      <Text style={styles.metricTitle}>{title}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricSubtitle}>{subtitle}</Text>
    </View>
  );
}

// Sub-komponen Location Item
function LocationItem({
  name,
  sub,
  active,
  max,
  status,
  price,
  percent,
}: {
  name: string;
  sub: string;
  active: string;
  max: string;
  status: string;
  price: string;
  percent: number;
}) {
  return (
    <View style={styles.locationCard}>
      <View style={styles.locationHeader}>
        <View style={styles.locationTitleRow}>
          <View style={styles.leafIconBox}>
            <Ionicons name="leaf-outline" size={16} color="#176B3A" />
          </View>
          <View>
            <Text style={styles.locationName}>{name}</Text>
            <Text style={styles.locationSub}>{sub}</Text>
          </View>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      <View style={styles.progressRow}>
        <Text style={styles.progressLabel}>
          Pengunjung aktif: <Text style={styles.boldNum}>{active}</Text> / {max}{" "}
          orang
        </Text>
        <Text style={styles.progressPercent}>{percent}%</Text>
      </View>

      <View style={styles.progressBarTrack}>
        <View style={[styles.progressBarFill, { width: `${percent}%` }]} />
      </View>

      <View style={styles.locationFooter}>
        <Text style={styles.capacityText}>Kapasitas maks: {max} orang</Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  );
}

// Sub-komponen Status Chip
function StatusChip({
  label,
  count,
  color,
}: {
  label: string;
  count: string;
  color: string;
}) {
  return (
    <View style={styles.statusChip}>
      <View style={styles.statusChipLeft}>
        <View style={[styles.dot, { backgroundColor: color }]} />
        <Text style={styles.statusLabel}>{label}</Text>
      </View>
      <Text style={styles.statusCount}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 18,
    paddingTop: 50,
    paddingBottom: 20,
  },
  // Top Header Card (Mirip Card Profile Gambar 2)
  topHeaderCard: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: 20,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#176B3A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarBox: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#176B3A",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeSubText: {
    fontSize: 11,
    color: "#60766A",
    fontWeight: "500",
  },
  welcomeTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#19352A",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  circleBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#F0F6F2",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  notifBadge: {
    position: "absolute",
    top: 9,
    right: 9,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E53935",
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#1D3B2E",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarLetter: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
  },

  // Title Section
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  tagline: {
    fontSize: 10,
    fontWeight: "800",
    color: "#3F7558",
    letterSpacing: 1,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#142E23",
  },
  mainSubtitle: {
    fontSize: 11,
    color: "#6B7C73",
    marginTop: 3,
    lineHeight: 16,
  },
  dateBadge: {
    fontSize: 10,
    color: "#557565",
    fontWeight: "600",
    marginTop: 5,
  },
  refreshBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 14,
    gap: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  refreshText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#176B3A",
  },

  // Grid Cards
  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 20,
  },
  metricCard: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 15,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  liveBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
  },
  liveDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#EF4444",
  },
  liveText: {
    fontSize: 8,
    fontWeight: "800",
    color: "#EF4444",
  },
  metricIconBg: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#176B3A",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  metricTitle: {
    fontSize: 11,
    color: "#6B7C73",
    fontWeight: "600",
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "800",
    color: "#142E23",
    marginTop: 2,
  },
  metricSubtitle: {
    fontSize: 10,
    color: "#84958C",
    marginTop: 2,
  },

  // Main Card Sections
  mainCardSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  cardTag: {
    fontSize: 9,
    fontWeight: "800",
    color: "#3F7558",
    letterSpacing: 0.8,
  },
  cardSectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#142E23",
  },
  cardSectionDesc: {
    fontSize: 11,
    color: "#788B81",
    marginTop: 2,
  },
  cardIconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#EBF5EF",
    justifyContent: "center",
    alignItems: "center",
  },

  // Location Card
  locationCard: {
    backgroundColor: "#F6FAF7",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E3ECE6",
  },
  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  locationTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  leafIconBox: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#E2F0E7",
    justifyContent: "center",
    alignItems: "center",
  },
  locationName: {
    fontSize: 13,
    fontWeight: "800",
    color: "#142E23",
  },
  locationSub: {
    fontSize: 10,
    color: "#84958C",
  },
  statusBadge: {
    backgroundColor: "#DDF2E4",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#176B3A",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 10,
    color: "#6B7C73",
  },
  boldNum: {
    fontWeight: "800",
    color: "#142E23",
  },
  progressPercent: {
    fontSize: 10,
    fontWeight: "800",
    color: "#142E23",
  },
  progressBarTrack: {
    height: 6,
    backgroundColor: "#E0ECE4",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#176B3A",
    borderRadius: 3,
  },
  locationFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  capacityText: {
    fontSize: 9,
    color: "#9AA8A1",
  },
  priceText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#557565",
  },

  // Status Chip
  statusGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  statusChip: {
    width: "48%",
    backgroundColor: "#F6FAF7",
    padding: 10,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E3ECE6",
  },
  statusChipLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  statusLabel: {
    fontSize: 11,
    color: "#4A5D54",
    fontWeight: "600",
  },
  statusCount: {
    fontSize: 12,
    fontWeight: "800",
    color: "#142E23",
  },
});
