import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ETicketScreen() {
  const [activeTab, setActiveTab] = useState<"tiket" | "scan">("tiket");

  return (
    <LinearGradient
      colors={["#E8F3EB", "#F2F8F4", "#E5EFE8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Profile Header Bar */}
        <View style={styles.headerCard}>
          <View style={styles.userInfo}>
            <View style={styles.logoIconBg}>
              <Ionicons name="leaf" size={20} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.greetingSub}>Selamat Pagi,</Text>
              <Text style={styles.greetingTitle}>Wahyu!</Text>
            </View>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconCircle} activeOpacity={0.8}>
              <Ionicons
                name="notifications-outline"
                size={18}
                color="#1D3B2E"
              />
              <View style={styles.badgeDot} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle} activeOpacity={0.8}>
              <Ionicons name="person-outline" size={18} color="#1D3B2E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* E-Ticket Tab Header Card */}
        <View style={styles.tabCard}>
          <View style={styles.tabHeaderRow}>
            <View style={styles.tabIconBg}>
              <Ionicons name="ticket-outline" size={22} color="#FFFFFF" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.tabHeaderTitle}>E-Ticket</Text>
              <Text style={styles.tabHeaderSub}>
                Tiket digital untuk akses ke lokasi.
              </Text>
            </View>
          </View>

          {/* Toggle Button Group */}
          <View style={styles.toggleGroup}>
            <TouchableOpacity
              style={[
                styles.toggleBtn,
                activeTab === "tiket" && styles.toggleBtnActive,
              ]}
              onPress={() => setActiveTab("tiket")}
              activeOpacity={0.85}
            >
              <Ionicons
                name="ticket"
                size={16}
                color={activeTab === "tiket" ? "#FFFFFF" : "#5B7366"}
              />
              <Text
                style={[
                  styles.toggleText,
                  activeTab === "tiket" && styles.toggleTextActive,
                ]}
              >
                Tiket Saya
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggleBtn,
                activeTab === "scan" && styles.toggleBtnActive,
              ]}
              onPress={() => setActiveTab("scan")}
              activeOpacity={0.85}
            >
              <Ionicons
                name="qr-code-outline"
                size={16}
                color={activeTab === "scan" ? "#FFFFFF" : "#5B7366"}
              />
              <Text
                style={[
                  styles.toggleText,
                  activeTab === "scan" && styles.toggleTextActive,
                ]}
              >
                Scan QR
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section Title & Active Ticket Badge */}
        <View style={styles.sectionRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Daftar Tiket Aktif</Text>
            <Text style={styles.sectionSub}>
              Berikut adalah tiket yang sedang aktif dan dapat digunakan.
            </Text>
          </View>
          <View style={styles.activeBadge}>
            <View style={styles.activeDot} />
            <Text style={styles.activeBadgeText}>2 Tiket Aktif</Text>
          </View>
        </View>

        {/* Card Tiket 1: Area Sungai */}
        <TicketCardItem
          title="Area Sungai"
          date="12 Sep 2026 - 14 Sep 2026"
          guests="2 Orang"
          locationCategory="Bedengan Reserve"
          bookingCode="RSV-20260912-001"
          imageUri="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=500&q=80"
        />

        {/* Card Tiket 2: Bedengan Camping Ground */}
        <TicketCardItem
          title="Bedengan Camping Ground"
          date="20 Sep 2026 - 22 Sep 2026"
          guests="3 Orang"
          locationCategory="Bedengan Reserve"
          bookingCode="RSV-20260920-003"
          imageUri="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=500&q=80"
        />

        <View style={{ height: 20 }} />
      </ScrollView>
    </LinearGradient>
  );
}

// Sub Component Card Tiket
function TicketCardItem({
  title,
  date,
  guests,
  locationCategory,
  bookingCode,
  imageUri,
}: {
  title: string;
  date: string;
  guests: string;
  locationCategory: string;
  bookingCode: string;
  imageUri: string;
}) {
  return (
    <View style={styles.ticketCard}>
      {/* Top Info Card */}
      <View style={styles.ticketMainRow}>
        <View style={styles.cardImageWrapper}>
          <Image source={{ uri: imageUri }} style={styles.cardImage} />
          <View style={styles.cardTagOverlay}>
            <Ionicons name="leaf" size={9} color="#FFFFFF" />
            <Text style={styles.cardTagText}>Camping Ground</Text>
          </View>
        </View>

        <View style={styles.ticketMainInfo}>
          <View style={styles.ticketHeaderRow}>
            <Text style={styles.ticketTitle} numberOfLines={1}>
              {title}
            </Text>
            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Aktif</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={13} color="#788C82" />
            <Text style={styles.infoText}>{date}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="people-outline" size={13} color="#788C82" />
            <Text style={styles.infoText}>{guests}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={13} color="#788C82" />
            <Text style={styles.infoText}>{locationCategory}</Text>
          </View>
        </View>

        <Ionicons
          name="chevron-forward"
          size={18}
          color="#A3B4AB"
          style={styles.arrowIcon}
        />
      </View>

      {/* Booking Code Box */}
      <View style={styles.bookingCodeBox}>
        <View>
          <Text style={styles.bookingCodeLabel}>KODE BOOKING</Text>
          <Text style={styles.bookingCodeValue}>{bookingCode}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.copyBtn}>
          <Ionicons name="copy-outline" size={18} color="#176B3A" />
        </TouchableOpacity>
      </View>

      {/* QR Ticket Action Container */}
      <View style={styles.qrActionContainer}>
        <View style={styles.qrPreviewWrapper}>
          <Ionicons name="qr-code" size={36} color="#183328" />
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.qrActionTitle}>Tiket Masuk</Text>
          <Text style={styles.qrActionDesc}>
            Tunjukkan QR Code ini kepada petugas saat kedatangan dan kepulangan.
          </Text>
        </View>

        <TouchableOpacity style={styles.detailBtn} activeOpacity={0.8}>
          <Ionicons name="receipt-outline" size={14} color="#183328" />
          <Text style={styles.detailBtnText}>Lihat Detail</Text>
          <Ionicons name="chevron-forward" size={12} color="#183328" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 24,
  },

  // Top Profile Header Bar
  headerCard: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoIconBg: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#176B3A",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingSub: {
    fontSize: 11,
    color: "#697D73",
    fontWeight: "500",
  },
  greetingTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#183328",
  },
  headerActions: {
    flexDirection: "row",
    gap: 8,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EFF5F1",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  badgeDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E53935",
  },

  // Tab Header Card
  tabCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  tabHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  tabIconBg: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#176B3A",
    justifyContent: "center",
    alignItems: "center",
  },
  tabHeaderTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#183328",
  },
  tabHeaderSub: {
    fontSize: 11,
    color: "#788C82",
    marginTop: 2,
  },
  toggleGroup: {
    flexDirection: "row",
    backgroundColor: "#F2F7F4",
    borderRadius: 16,
    padding: 4,
    gap: 4,
  },
  toggleBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 12,
    gap: 6,
  },
  toggleBtnActive: {
    backgroundColor: "#176B3A",
  },
  toggleText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5B7366",
  },
  toggleTextActive: {
    color: "#FFFFFF",
  },

  // Section Row
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#183328",
  },
  sectionSub: {
    fontSize: 10,
    color: "#788C82",
    marginTop: 2,
  },
  activeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    gap: 5,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#16A34A",
  },
  activeBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#15803D",
  },

  // Ticket Card
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 14,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  ticketMainRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardImageWrapper: {
    width: 85,
    height: 85,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardTagOverlay: {
    position: "absolute",
    bottom: 4,
    left: 4,
    backgroundColor: "rgba(23, 107, 58, 0.88)",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  cardTagText: {
    color: "#FFFFFF",
    fontSize: 7,
    fontWeight: "700",
  },
  ticketMainInfo: {
    flex: 1,
    marginLeft: 12,
  },
  ticketHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  ticketTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#183328",
    flex: 1,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 8,
    gap: 3,
  },
  statusDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#16A34A",
  },
  statusText: {
    fontSize: 9,
    fontWeight: "800",
    color: "#15803D",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 3,
  },
  infoText: {
    fontSize: 10,
    color: "#6B7E74",
  },
  arrowIcon: {
    marginLeft: 4,
  },

  // Booking Code Box
  bookingCodeBox: {
    backgroundColor: "#EEF7F2",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  bookingCodeLabel: {
    fontSize: 8,
    fontWeight: "800",
    color: "#607D6F",
    letterSpacing: 0.5,
  },
  bookingCodeValue: {
    fontSize: 13,
    fontWeight: "800",
    color: "#183328",
    marginTop: 1,
  },
  copyBtn: {
    padding: 4,
  },

  // QR Action Box
  qrActionContainer: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2ECE6",
    borderStyle: "dashed",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFCFA",
  },
  qrPreviewWrapper: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2ECE6",
  },
  qrActionTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: "#183328",
  },
  qrActionDesc: {
    fontSize: 9,
    color: "#788C82",
    marginTop: 1,
    lineHeight: 12,
  },
  detailBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2ECE6",
    gap: 3,
  },
  detailBtnText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#183328",
  },
});
