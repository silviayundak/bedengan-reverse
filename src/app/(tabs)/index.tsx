import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1 }}>
      {/* Soft Mint Gradient Background */}
      <LinearGradient
        colors={["#E2EFE0", "#EEF6F0", "#E1EFE4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {/* Top Profile / Header Card */}
          <View style={styles.topHeaderCard}>
            <View style={styles.greetingContainer}>
              <View style={styles.avatarBox}>
                <Ionicons name="tree" size={22} color="#FFFFFF" />
                <View style={styles.activeCheckBadge}>
                  <Ionicons name="checkmark" size={8} color="#FFFFFF" />
                </View>
              </View>
              <View>
                <Text style={styles.welcomeTitle}>Selamat Pagi, Lisaa! 👋</Text>
                <Text style={styles.welcomeSubText}>
                  Nikmati keindahan alam, mulai{"\n"}petualanganmu di Bedengan.
                </Text>
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
                <View style={styles.innerAvatarCircle} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Weather & Elevation Widget */}
          <View style={styles.weatherCard}>
            <View style={styles.weatherMain}>
              <View style={styles.sunIconBox}>
                <Ionicons
                  name="cloudy-night-outline"
                  size={30}
                  color="#D97706"
                />
              </View>
              <View>
                <View
                  style={{ flexDirection: "row", alignItems: "flex-start" }}
                >
                  <Text style={styles.tempText}>24</Text>
                  <Text style={styles.tempDegree}>° C</Text>
                </View>
                <Text style={styles.weatherStatus}>Cerah Berawan</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location-sharp" size={11} color="#6B7C73" />
                  <Text style={styles.locationText}>Bedengan, Malang</Text>
                </View>
              </View>
            </View>

            <View style={styles.weatherDivider} />

            <View style={styles.weatherDetails}>
              <View style={styles.weatherDetailRow}>
                <View style={styles.smallIconCircle}>
                  <MaterialCommunityIcons
                    name="image-filter-hdr"
                    size={14}
                    color="#4A5D54"
                  />
                </View>
                <View>
                  <Text style={styles.detailLabel}>KETINGGIAN</Text>
                  <Text style={styles.detailValue}>1.250 mdpl</Text>
                </View>
              </View>

              <View style={styles.weatherDetailRow}>
                <View style={styles.smallIconCircle}>
                  <Ionicons
                    name="thermometer-outline"
                    size={14}
                    color="#4A5D54"
                  />
                </View>
                <View>
                  <Text style={styles.detailLabel}>RENTANG SUHU</Text>
                  <Text style={styles.detailValue}>18° – 26° C</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Quick Action Grid */}
          <View style={styles.actionGrid}>
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
              <View style={styles.actionIconBox}>
                <Ionicons name="ticket-outline" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.actionTitle}>Pesan Tiket</Text>
              <Text style={styles.actionSubtitle}>Masuk Kawasan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
              <View style={styles.actionIconBox}>
                <Ionicons name="calendar-outline" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.actionTitle}>Pesan Camping</Text>
              <Text style={styles.actionSubtitle}>Pilih Area & Tgl</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
              <View style={styles.actionIconBox}>
                <Ionicons name="map-outline" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.actionTitle}>Lihat Peta</Text>
              <Text style={styles.actionSubtitle}>Jelajahi Lokasi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
              <View style={styles.actionIconBox}>
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
              <Text style={styles.actionTitle}>Informasi</Text>
              <Text style={styles.actionSubtitle}>Fasilitas & Aturan</Text>
            </TouchableOpacity>
          </View>

          {/* Banner Promo / Highlight */}
          <View style={styles.heroBanner}>
            <ImageBackground
              source={{
                uri: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
              }}
              style={styles.heroBgImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <LinearGradient
                colors={["rgba(10,25,18,0.75)", "rgba(10,25,18,0.95)"]}
                style={styles.heroOverlay}
              >
                <View style={styles.heroTag}>
                  <Ionicons name="leaf" size={10} color="#10B981" />
                  <Text style={styles.heroTagText}>
                    BUMI PERKEMAHAN BEDENGAN
                  </Text>
                </View>

                <Text style={styles.heroTitle}>
                  Rasakan Pengalaman Camping yang Berbeda
                </Text>
                <Text style={styles.heroSubtitle}>
                  Tidur di bawah rimbun pohon pinus purba dengan gemericik
                  sungai jernih dan udara pegunungan alami.
                </Text>

                <View style={styles.heroFooter}>
                  <TouchableOpacity style={styles.heroBtn} activeOpacity={0.8}>
                    <Text style={styles.heroBtnText}>Lihat Detail</Text>
                    <Ionicons name="arrow-forward" size={14} color="#142E23" />
                  </TouchableOpacity>

                  <View style={styles.pillTag}>
                    <Text style={styles.pillTagText}>
                      100% Alam | 100% Seru
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>

          {/* Camping Ground Section */}
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.smallGreenBadge}>
                <Ionicons name="leaf" size={12} color="#FFFFFF" />
              </View>
              <View>
                <Text style={styles.sectionMainTitle}>Camping Ground</Text>
                <Text style={styles.sectionSubTitle}>
                  Pilih area favoritmu untuk berkemah
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeAllBtn}>
              <Text style={styles.seeAllText}>Lihat Semua</Text>
              <Ionicons name="chevron-forward" size={14} color="#3F7558" />
            </TouchableOpacity>
          </View>

          {/* Horizontal Camping Cards */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          >
            {/* Card 1 */}
            <View style={styles.campingCard}>
              <View style={styles.cardImageContainer}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80",
                  }}
                  style={styles.cardImage}
                />
                <View style={styles.availableBadge}>
                  <View style={styles.greenDot} />
                  <Text style={styles.availableText}>Tersedia</Text>
                </View>
                <TouchableOpacity style={styles.favBtn}>
                  <Ionicons name="heart" size={14} color="#EF4444" />
                </TouchableOpacity>
              </View>

              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Pinus Utama</Text>
                <View style={styles.locationInfoRow}>
                  <Ionicons name="location-outline" size={12} color="#84958C" />
                  <Text style={styles.cardLocation}>Zona Lembah Rindang</Text>
                </View>
                <View style={styles.capacityRow}>
                  <Ionicons name="people-outline" size={12} color="#84958C" />
                  <Text style={styles.cardCapacity}>Kapasitas 50 orang</Text>
                </View>

                <View style={styles.cardFooter}>
                  <View>
                    <Text style={styles.pricePrefix}>Mulai dari</Text>
                    <Text style={styles.priceText}>
                      Rp 25.000 <Text style={styles.priceUnit}>/ malam</Text>
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.circleArrowBtn}>
                    <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Card 2 */}
            <View style={styles.campingCard}>
              <View style={styles.cardImageContainer}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80",
                  }}
                  style={styles.cardImage}
                />
                <View style={styles.availableBadge}>
                  <View style={styles.greenDot} />
                  <Text style={styles.availableText}>Tersedia</Text>
                </View>
              </View>

              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Lembah Hijau</Text>
                <View style={styles.locationInfoRow}>
                  <Ionicons name="location-outline" size={12} color="#84958C" />
                  <Text style={styles.cardLocation}>Zona Bantaran Sungai</Text>
                </View>
                <View style={styles.capacityRow}>
                  <Ionicons name="people-outline" size={12} color="#84958C" />
                  <Text style={styles.cardCapacity}>Kapasitas 35 orang</Text>
                </View>

                <View style={styles.cardFooter}>
                  <View>
                    <Text style={styles.pricePrefix}>Mulai dari</Text>
                    <Text style={styles.priceText}>
                      Rp 30.000 <Text style={styles.priceUnit}>/ malam</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={{ height: 80 }} />
        </ScrollView>
      </LinearGradient>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
  },

  // Header Card
  topHeaderCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 24,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#1D3B2E",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  activeCheckBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#10B981",
    borderRadius: 8,
    width: 14,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },
  welcomeTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#142E23",
  },
  welcomeSubText: {
    fontSize: 10.5,
    color: "#6B7C73",
    marginTop: 1,
    lineHeight: 14,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  circleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0F6F2",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  notifBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#EF4444",
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1D3B2E",
    justifyContent: "center",
    alignItems: "center",
  },
  innerAvatarCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#A7F3D0",
  },

  // Weather Card
  weatherCard: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  weatherMain: {
    flex: 1.2,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sunIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#FEF3C7",
    justifyContent: "center",
    alignItems: "center",
  },
  tempText: {
    fontSize: 26,
    fontWeight: "800",
    color: "#142E23",
  },
  tempDegree: {
    fontSize: 12,
    fontWeight: "700",
    color: "#142E23",
    marginTop: 2,
    marginLeft: 2,
  },
  weatherStatus: {
    fontSize: 12,
    fontWeight: "700",
    color: "#142E23",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 2,
  },
  locationText: {
    fontSize: 10,
    color: "#6B7C73",
  },
  weatherDivider: {
    width: 1,
    height: "80%",
    backgroundColor: "#D1E2D7",
    marginHorizontal: 12,
  },
  weatherDetails: {
    flex: 1,
    gap: 10,
  },
  weatherDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  smallIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E2F0E7",
    justifyContent: "center",
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 8.5,
    fontWeight: "800",
    color: "#84958C",
    letterSpacing: 0.5,
  },
  detailValue: {
    fontSize: 11,
    fontWeight: "800",
    color: "#142E23",
  },

  // Action Grid
  actionGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  actionCard: {
    width: "23%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 4,
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 5,
  },
  actionIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#3A6251",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: "#142E23",
    textAlign: "center",
  },
  actionSubtitle: {
    fontSize: 8.5,
    color: "#84958C",
    textAlign: "center",
    marginTop: 2,
  },

  // Hero Banner
  heroBanner: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  heroBgImage: {
    width: "100%",
  },
  heroOverlay: {
    padding: 18,
  },
  heroTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 10,
  },
  heroTagText: {
    fontSize: 9,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 6,
    lineHeight: 22,
  },
  heroSubtitle: {
    fontSize: 10.5,
    color: "#D1E2D7",
    lineHeight: 15,
    marginBottom: 16,
  },
  heroFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroBtn: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  heroBtnText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#142E23",
  },
  pillTag: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  pillTagText: {
    fontSize: 9.5,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  // Section Header
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  smallGreenBadge: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: "#3A6251",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionMainTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#142E23",
  },
  sectionSubTitle: {
    fontSize: 10,
    color: "#6B7C73",
  },
  seeAllBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#3F7558",
  },

  // Camping Horizontal Cards
  horizontalList: {
    gap: 12,
  },
  campingCard: {
    width: 210,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 8,
  },
  cardImageContainer: {
    height: 120,
    borderRadius: 14,
    overflow: "hidden",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  availableBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "rgba(16, 185, 129, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  greenDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
  },
  availableText: {
    fontSize: 8.5,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  favBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBody: {
    padding: 6,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#142E23",
    marginTop: 2,
  },
  locationInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 3,
  },
  cardLocation: {
    fontSize: 9.5,
    color: "#84958C",
  },
  capacityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  cardCapacity: {
    fontSize: 9.5,
    color: "#84958C",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
  },
  pricePrefix: {
    fontSize: 8.5,
    color: "#84958C",
  },
  priceText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#142E23",
  },
  priceUnit: {
    fontSize: 9,
    fontWeight: "400",
    color: "#84958C",
  },
  circleArrowBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3A6251",
    justifyContent: "center",
    alignItems: "center",
  },

  // Bottom Navigation
  bottomNavContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    alignItems: "center",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
    justifyContent: "space-around",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  navItemActive: {
    backgroundColor: "#3A6251",
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  navText: {
    fontSize: 9,
    color: "#788B81",
    marginTop: 2,
  },
  navTextActive: {
    fontSize: 11,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
