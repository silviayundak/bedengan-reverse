import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ReservasiScreen() {
  const [searchText, setSearchText] = useState("");

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
        {/* Top Header Profile Bar */}
        <View style={styles.headerCard}>
          <View style={styles.userInfo}>
            <View style={styles.logoIconBg}>
              <Ionicons name="leaf" size={20} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.greetingSub}>Selamat Pagi,</Text>
              <Text style={styles.greetingTitle}>Lisa!</Text>
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

        {/* Italic Quote */}
        <Text style={styles.quoteText}>
          "Jelajahi keindahan alam, rasakan pengalaman tak terlupakan di
          Bedengan."
        </Text>

        {/* Stepper Card (Reservasi Camping) */}
        <View style={styles.stepperCard}>
          <View style={styles.stepperHeader}>
            <View style={styles.stepperIconBg}>
              <Ionicons name="home" size={22} color="#FFFFFF" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.stepperTitle}>Reservasi Camping</Text>
              <Text style={styles.stepperSub}>
                Pesan tempat camping favoritmu dengan mudah.
              </Text>
            </View>
          </View>

          {/* Steps Indicator */}
          <View style={styles.stepsRow}>
            {/* Step 1 */}
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleActive]}>
                <Ionicons name="location" size={16} color="#FFFFFF" />
              </View>
              <Text style={[styles.stepText, styles.stepTextActive]}>
                Pilih Lokasi Bedengan
              </Text>
            </View>

            <View style={styles.stepLine} />

            {/* Step 2 */}
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <Text style={styles.stepText}>Pilih Tanggal & Jumlah</Text>
            </View>

            <View style={styles.stepLine} />

            {/* Step 3 */}
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <Text style={styles.stepText}>Konfirmasi & Bayar</Text>
            </View>
          </View>
        </View>

        {/* Proteksi Kuota Banner */}
        <View style={styles.warningBanner}>
          <View style={styles.warningIconBg}>
            <Text style={styles.warningExclamation}>!</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.warningTitle}>Proteksi Kuota</Text>
            <Text style={styles.warningDesc}>
              Jika lokasi yang dipilih sudah 100% penuh, form booking akan
              otomatis terkunci.
            </Text>
          </View>
          <View style={styles.fullBadge}>
            <Ionicons name="person" size={12} color="#E53935" />
            <Text style={styles.fullBadgeText}>100% Penuh</Text>
          </View>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionIconBg}>
            <Ionicons name="location" size={18} color="#FFFFFF" />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.sectionTitle}>1. Pilih Lokasi Bedengan</Text>
            <Text style={styles.sectionSub}>
              Pilih area camping yang sesuai dengan kebutuhanmu.
            </Text>
          </View>
        </View>

        {/* Search Bar with Filter Icon */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#789084" />
          <TextInput
            placeholder="Cari nama lokasi, fasilitas, atau area..."
            placeholderTextColor="#8C9E94"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="options-outline" size={20} color="#5B7366" />
          </TouchableOpacity>
        </View>

        {/* Location Cards (Hanya 2 Lokasi Sesuai Dashboard) */}
        <LocationCardItem
          title="Area Sungai"
          subText="Area sejuk di tepi aliran sungai jernih."
          location="Bedengan, Malang"
          status="Tersedia"
          imageUri="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=500&q=80"
        />

        <LocationCardItem
          title="Bedengan Camping Ground"
          subText="Area luas, cocok untuk keluarga & komunitas."
          location="Bedengan, Malang"
          status="Tersedia"
          imageUri="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=500&q=80"
        />

        {/* Kapasitas Tersedia Card Banner */}
        <TouchableOpacity style={styles.capacityCard} activeOpacity={0.85}>
          <View style={styles.capacityIconBg}>
            <Ionicons name="people" size={22} color="#176B3A" />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.capacityTitle}>Kapasitas Tersedia</Text>
            <Text style={styles.capacityDesc}>
              Pilih lokasi untuk melihat detail kapasitas dan tanggal tersedia.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#839B8E" />
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </LinearGradient>
  );
}

// Sub Component Card Lokasi
function LocationCardItem({
  title,
  subText,
  location,
  status,
  imageUri,
}: {
  title: string;
  subText: string;
  location: string;
  status: string;
  imageUri: string;
}) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.88}>
      {/* Thumbnail Area dengan Tag */}
      <View style={styles.cardImageWrapper}>
        <Image source={{ uri: imageUri }} style={styles.cardImage} />
        <View style={styles.cardTagOverlay}>
          <Ionicons name="leaf" size={10} color="#FFFFFF" />
          <Text style={styles.cardTagText}>Camping Ground</Text>
        </View>
      </View>

      {/* Info Lokasi */}
      <View style={styles.cardContent}>
        <View style={styles.cardHeaderRow}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={13} color="#84968C" />
          <Text style={styles.infoText} numberOfLines={1}>
            {subText}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={13} color="#84968C" />
          <Text style={styles.infoText}>{location}</Text>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color="#A3B4AB"
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
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

  // Quote
  quoteText: {
    fontSize: 11,
    fontStyle: "italic",
    color: "#5B7065",
    marginTop: 14,
    marginBottom: 16,
    textAlign: "left",
    paddingHorizontal: 4,
  },

  // Stepper Card
  stepperCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  stepperHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  stepperIconBg: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#176B3A",
    justifyContent: "center",
    alignItems: "center",
  },
  stepperTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#183328",
  },
  stepperSub: {
    fontSize: 11,
    color: "#788C82",
    marginTop: 2,
  },
  stepsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#F0F5F2",
  },
  stepItem: {
    alignItems: "center",
    flex: 1,
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E2ECE6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  stepCircleActive: {
    backgroundColor: "#176B3A",
  },
  stepNumberText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#677D72",
  },
  stepText: {
    fontSize: 9,
    color: "#83968C",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 12,
  },
  stepTextActive: {
    color: "#176B3A",
    fontWeight: "800",
  },
  stepLine: {
    height: 1,
    backgroundColor: "#DCE7E0",
    flex: 0.5,
    marginTop: 16,
  },

  // Warning Banner
  warningBanner: {
    backgroundColor: "#FFF8EC",
    borderRadius: 18,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFE2B8",
    marginBottom: 20,
    gap: 10,
  },
  warningIconBg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F59E0B",
    justifyContent: "center",
    alignItems: "center",
  },
  warningExclamation: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },
  warningTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: "#854D0E",
  },
  warningDesc: {
    fontSize: 10,
    color: "#A16207",
    marginTop: 1,
    lineHeight: 13,
  },
  fullBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 4,
  },
  fullBadgeText: {
    fontSize: 9,
    fontWeight: "800",
    color: "#DC2626",
  },

  // Section Title
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionIconBg: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#176B3A",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#183328",
  },
  sectionSub: {
    fontSize: 11,
    color: "#788C82",
  },

  // Search Bar
  searchContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2ECE6",
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: "#183328",
  },

  // Location Cards
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
  },
  cardImageWrapper: {
    width: 95,
    height: 85,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardTagOverlay: {
    position: "absolute",
    bottom: 5,
    left: 5,
    backgroundColor: "rgba(23, 107, 58, 0.88)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  cardTagText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
    paddingRight: 4,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#183328",
    flex: 1,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    gap: 4,
  },
  statusDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
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
    color: "#72857B",
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 4,
  },

  // Capacity Card
  capacityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
  },
  capacityIconBg: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#E8F5ED",
    justifyContent: "center",
    alignItems: "center",
  },
  capacityTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#183328",
  },
  capacityDesc: {
    fontSize: 10,
    color: "#788C82",
    marginTop: 1,
  },
});
