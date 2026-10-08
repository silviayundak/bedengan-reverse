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
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// =============================================================
// IMAGE DASHBOARD
// Lokasi:
// assets/images/bedengan-dashboard.jpg
//
// File ini berada di:
// src/app/(tabs)/index.tsx
//
// Jadi path yang benar:
// ../../../assets/images/bedengan-dashboard.jpg
// =============================================================

const dashboardImage = require("../../../assets/images/bedengan-dashboard.jpg");

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <View style={styles.heroContainer}>
          <ImageBackground
            source={dashboardImage}
            style={styles.heroBackground}
            imageStyle={styles.heroImage}
          >
            <LinearGradient
              colors={[
                "rgba(10, 45, 32, 0.08)",
                "rgba(10, 45, 32, 0.42)",
                "rgba(7, 35, 26, 0.92)",
              ]}
              locations={[0, 0.48, 1]}
              style={styles.heroOverlay}
            >
              {/* =================================================
                  HEADER
              ================================================= */}
              <View style={styles.header}>
                {/* LOGO */}
                <View style={styles.logoContainer}>
                  <View style={styles.logoIcon}>
                    <Ionicons name="triangle" size={18} color="#FFFFFF" />
                  </View>

                  <View>
                    <Text style={styles.logoTitle}>Bedengan</Text>

                    <Text style={styles.logoSubtitle}>RESERVE</Text>
                  </View>
                </View>

                {/* HEADER ACTION */}
                <View style={styles.headerRight}>
                  <TouchableOpacity
                    style={styles.headerIcon}
                    activeOpacity={0.8}
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={20}
                      color="#FFFFFF"
                    />

                    <View style={styles.notificationDot} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.profileButton}
                    activeOpacity={0.8}
                  >
                    <Ionicons name="person-outline" size={17} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* =================================================
                  HERO TEXT
              ================================================= */}
              <View style={styles.heroContent}>
                <Text style={styles.heroWelcome}>Selamat Datang di</Text>

                <Text style={styles.heroTitle}>Bedengan Reserve</Text>

                <Text style={styles.heroDescription}>
                  Nikmati pengalaman berkemah yang nyaman{"\n"}
                  dengan pemandangan alam yang menakjubkan.
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* =====================================================
            SEARCH / RESERVATION CARD
        ===================================================== */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchCard}>
            {/* LOKASI */}
            <TouchableOpacity style={styles.searchItem} activeOpacity={0.7}>
              <View style={styles.searchIconBox}>
                <Ionicons name="location-outline" size={18} color="#356B54" />
              </View>

              <View style={styles.searchTextContainer}>
                <Text style={styles.searchLabel}>Lokasi</Text>

                <Text style={styles.searchValue}>Pilih lokasi</Text>
              </View>

              <Ionicons name="chevron-down" size={16} color="#87968F" />
            </TouchableOpacity>

            <View style={styles.searchDivider} />

            {/* CHECK IN */}
            <TouchableOpacity style={styles.searchItem} activeOpacity={0.7}>
              <View style={styles.searchIconBox}>
                <Ionicons name="calendar-outline" size={18} color="#356B54" />
              </View>

              <View style={styles.searchTextContainer}>
                <Text style={styles.searchLabel}>Check In</Text>

                <Text style={styles.searchValue}>Pilih tanggal</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.searchDivider} />

            {/* CHECK OUT */}
            <TouchableOpacity style={styles.searchItem} activeOpacity={0.7}>
              <View style={styles.searchIconBox}>
                <Ionicons name="calendar-outline" size={18} color="#356B54" />
              </View>

              <View style={styles.searchTextContainer}>
                <Text style={styles.searchLabel}>Check Out</Text>

                <Text style={styles.searchValue}>Pilih tanggal</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.searchDivider} />

            {/* JUMLAH PENGUNJUNG */}
            <TouchableOpacity style={styles.searchItem} activeOpacity={0.7}>
              <View style={styles.searchIconBox}>
                <Ionicons name="people-outline" size={18} color="#356B54" />
              </View>

              <View style={styles.searchTextContainer}>
                <Text style={styles.searchLabel}>Jumlah Pengunjung</Text>

                <Text style={styles.searchValue}>1 orang</Text>
              </View>
            </TouchableOpacity>

            {/* BUTTON CARI */}
            <TouchableOpacity style={styles.searchButton} activeOpacity={0.85}>
              <Text style={styles.searchButtonText}>Cari Sekarang</Text>

              <Ionicons name="arrow-forward" size={17} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* =====================================================
            LOKASI BEDENGAN
        ===================================================== */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionHeaderText}>
              <Text style={styles.sectionTitle}>Lokasi Bedengan</Text>

              <Text style={styles.sectionSubtitle}>
                Pilih lokasi favoritmu dan rasakan pengalaman{"\n"}
                berkemah yang berbeda.
              </Text>
            </View>

            <TouchableOpacity style={styles.seeAllButton} activeOpacity={0.7}>
              <Text style={styles.seeAllText}>Lihat Semua</Text>

              <Ionicons name="chevron-forward" size={14} color="#356B54" />
            </TouchableOpacity>
          </View>

          {/* =================================================
              LOCATION CARDS
          ================================================= */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.locationList}
          >
            {/* =================================================
                BEDENGAN A
            ================================================= */}
            <TouchableOpacity style={styles.locationCard} activeOpacity={0.9}>
              <View style={styles.locationImageWrapper}>
                <Image source={dashboardImage} style={styles.locationImage} />

                <View style={styles.locationBadge}>
                  <View style={styles.badgeDot} />

                  <Text style={styles.badgeText}>Tersedia</Text>
                </View>

                <TouchableOpacity
                  style={styles.favoriteButton}
                  activeOpacity={0.8}
                >
                  <Ionicons name="heart-outline" size={17} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              <View style={styles.locationBody}>
                <Text style={styles.locationName} numberOfLines={1}>
                  Bedengan A
                </Text>

                <View style={styles.locationInfo}>
                  <Ionicons name="leaf-outline" size={14} color="#72837B" />

                  <Text style={styles.locationInfoText}>Area camping asri</Text>
                </View>

                <View style={styles.locationInfo}>
                  <Ionicons name="people-outline" size={14} color="#72837B" />

                  <Text style={styles.locationInfoText}>
                    Kapasitas 20 orang
                  </Text>
                </View>

                <View style={styles.locationFooter}>
                  <View>
                    <Text style={styles.locationPrice}>Rp 25.000</Text>

                    <Text style={styles.locationPriceUnit}>/ malam</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.arrowButton}
                    activeOpacity={0.8}
                  >
                    <Ionicons name="arrow-forward" size={15} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            {/* =================================================
                BEDENGAN B
            ================================================= */}
            <TouchableOpacity style={styles.locationCard} activeOpacity={0.9}>
              <View style={styles.locationImageWrapper}>
                <Image source={dashboardImage} style={styles.locationImage} />

                <View style={styles.locationBadge}>
                  <View style={styles.badgeDot} />

                  <Text style={styles.badgeText}>Tersedia</Text>
                </View>

                <TouchableOpacity
                  style={styles.favoriteButton}
                  activeOpacity={0.8}
                >
                  <Ionicons name="heart-outline" size={17} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              <View style={styles.locationBody}>
                <Text style={styles.locationName} numberOfLines={1}>
                  Bedengan B
                </Text>

                <View style={styles.locationInfo}>
                  <Ionicons name="leaf-outline" size={14} color="#72837B" />

                  <Text style={styles.locationInfoText}>
                    Area camping utama
                  </Text>
                </View>

                <View style={styles.locationInfo}>
                  <Ionicons name="people-outline" size={14} color="#72837B" />

                  <Text style={styles.locationInfoText}>
                    Kapasitas 20 orang
                  </Text>
                </View>

                <View style={styles.locationFooter}>
                  <View>
                    <Text style={styles.locationPrice}>Rp 25.000</Text>

                    <Text style={styles.locationPriceUnit}>/ malam</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.arrowButton}
                    activeOpacity={0.8}
                  >
                    <Ionicons name="arrow-forward" size={15} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            {/* =================================================
                BEDENGAN C
            ================================================= */}
            <TouchableOpacity style={styles.locationCard} activeOpacity={0.9}>
              <View style={styles.locationImageWrapper}>
                <Image source={dashboardImage} style={styles.locationImage} />

                <View style={styles.locationBadge}>
                  <View style={styles.badgeDot} />

                  <Text style={styles.badgeText}>Tersedia</Text>
                </View>

                <TouchableOpacity
                  style={styles.favoriteButton}
                  activeOpacity={0.8}
                >
                  <Ionicons name="heart-outline" size={17} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              <View style={styles.locationBody}>
                <Text style={styles.locationName} numberOfLines={1}>
                  Bedengan C
                </Text>

                <View style={styles.locationInfo}>
                  <Ionicons name="leaf-outline" size={14} color="#72837B" />

                  <Text style={styles.locationInfoText}>Pemandangan alam</Text>
                </View>

                <View style={styles.locationInfo}>
                  <Ionicons name="people-outline" size={14} color="#72837B" />

                  <Text style={styles.locationInfoText}>
                    Kapasitas 15 orang
                  </Text>
                </View>

                <View style={styles.locationFooter}>
                  <View>
                    <Text style={styles.locationPrice}>Rp 20.000</Text>

                    <Text style={styles.locationPriceUnit}>/ malam</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.arrowButton}
                    activeOpacity={0.8}
                  >
                    <Ionicons name="arrow-forward" size={15} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* =====================================================
            FEATURE SECTION
        ===================================================== */}
        <View style={styles.featureContainer}>
          {/* FEATURE 1 */}
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Ionicons name="leaf-outline" size={23} color="#356B54" />
            </View>

            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Alam Asri</Text>

              <Text style={styles.featureDescription}>
                Udara sejuk & pemandangan indah
              </Text>
            </View>
          </View>

          {/* FEATURE 2 */}
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Ionicons name="home-outline" size={23} color="#356B54" />
            </View>

            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Fasilitas Lengkap</Text>

              <Text style={styles.featureDescription}>
                Toilet, mushola, warung, dan lainnya
              </Text>
            </View>
          </View>

          {/* FEATURE 3 */}
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Ionicons
                name="shield-checkmark-outline"
                size={23}
                color="#356B54"
              />
            </View>

            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Keamanan 24 Jam</Text>

              <Text style={styles.featureDescription}>
                Tim keamanan selalu siaga
              </Text>
            </View>
          </View>
        </View>

        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}
        <View style={styles.whySection}>
          <View style={styles.centerSectionHeader}>
            <Text style={styles.whyTitle}>
              Kenapa Memilih{"\n"}
              <Text style={styles.whyTitleGreen}>Bedengan Reserve?</Text>
            </Text>

            <Text style={styles.whySubtitle}>
              Kami berkomitmen memberikan pengalaman terbaik{"\n"}
              untuk setiap pengunjung.
            </Text>
          </View>

          {/* WHY GRID */}
          <View style={styles.whyGrid}>
            {/* ITEM 1 */}
            <View style={styles.whyCard}>
              <View style={styles.whyIcon}>
                <Ionicons name="calendar-outline" size={22} color="#356B54" />
              </View>

              <Text style={styles.whyCardTitle}>Proses Mudah</Text>

              <Text style={styles.whyCardDescription}>
                Reservasi online{"\n"}
                cepat & praktis
              </Text>
            </View>

            {/* ITEM 2 */}
            <View style={styles.whyCard}>
              <View style={styles.whyIcon}>
                <Ionicons name="location-outline" size={22} color="#356B54" />
              </View>

              <Text style={styles.whyCardTitle}>Lokasi Strategis</Text>

              <Text style={styles.whyCardDescription}>
                Mudah diakses{"\n"}
                dari pusat kota
              </Text>
            </View>

            {/* ITEM 3 */}
            <View style={styles.whyCard}>
              <View style={styles.whyIcon}>
                <Ionicons name="pricetag-outline" size={22} color="#356B54" />
              </View>

              <Text style={styles.whyCardTitle}>Harga Terjangkau</Text>

              <Text style={styles.whyCardDescription}>
                Fasilitas lengkap{"\n"}
                dengan harga terbaik
              </Text>
            </View>

            {/* ITEM 4 */}
            <View style={styles.whyCard}>
              <View style={styles.whyIcon}>
                <Ionicons name="people-outline" size={22} color="#356B54" />
              </View>

              <Text style={styles.whyCardTitle}>Pelayanan Ramah</Text>

              <Text style={styles.whyCardDescription}>
                Tim kami siap{"\n"}
                membantu Anda
              </Text>
            </View>
          </View>
        </View>

        {/* =====================================================
            CTA RESERVASI
        ===================================================== */}
        <View style={styles.ctaContainer}>
          <ImageBackground
            source={dashboardImage}
            style={styles.ctaBackground}
            imageStyle={styles.ctaImage}
          >
            <LinearGradient
              colors={["rgba(13, 50, 37, 0.38)", "rgba(7, 37, 27, 0.94)"]}
              style={styles.ctaOverlay}
            >
              <Text style={styles.ctaTitle}>
                Siap untuk Petualangan{"\n"}
                Berikutnya?
              </Text>

              <Text style={styles.ctaDescription}>
                Pesan sekarang dan rasakan pengalaman{"\n"}
                berkemah yang tak terlupakan bersama{"\n"}
                Bedengan Reserve.
              </Text>

              <TouchableOpacity style={styles.ctaButton} activeOpacity={0.85}>
                <Text style={styles.ctaButtonText}>Lakukan Reservasi</Text>

                <Ionicons name="arrow-forward" size={17} color="#FFFFFF" />
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <View style={styles.footer}>
          <View style={styles.footerLogo}>
            <View style={styles.footerLogoIcon}>
              <Ionicons name="triangle" size={15} color="#FFFFFF" />
            </View>

            <View>
              <Text style={styles.footerLogoText}>Bedengan Reserve</Text>

              <Text style={styles.footerSmallText}>
                Smart Camping & Tourism Reservation
              </Text>
            </View>
          </View>

          <Text style={styles.footerCopyright}>© 2026 Bedengan Reserve</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({
  /* ===========================================================
     CONTAINER
  =========================================================== */

  container: {
    flex: 1,
    backgroundColor: "#F2F7F3",
  },

  scrollContent: {
    paddingBottom: 20,
  },

  /* ===========================================================
     HERO
  =========================================================== */

  heroContainer: {
    width: "100%",
    height: 390,
    overflow: "hidden",
  },

  heroBackground: {
    width: "100%",
    height: "100%",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 55,
    justifyContent: "space-between",
  },

  /* ===========================================================
     HEADER
  =========================================================== */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  logoTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  logoSubtitle: {
    fontSize: 7,
    color: "#DDEBE3",
    letterSpacing: 1.2,
    marginTop: 1,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
    justifyContent: "center",
    alignItems: "center",
  },

  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E95C48",
  },

  profileButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#27533F",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  /* ===========================================================
     HERO CONTENT
  =========================================================== */

  heroContent: {
    marginBottom: 15,
  },

  heroWelcome: {
    color: "#BBDAC9",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "900",
    letterSpacing: -0.7,
  },

  heroDescription: {
    color: "#F1F6F3",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },

  /* ===========================================================
     SEARCH
  =========================================================== */

  searchWrapper: {
    paddingHorizontal: 16,
    marginTop: -48,
    zIndex: 10,
  },

  searchCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 13,

    shadowColor: "#173C2B",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.14,
    shadowRadius: 15,

    elevation: 7,
  },

  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 48,
  },

  searchIconBox: {
    width: 36,
    height: 36,
    borderRadius: 11,
    backgroundColor: "#EDF5F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  searchTextContainer: {
    flex: 1,
  },

  searchLabel: {
    fontSize: 9,
    color: "#899790",
    fontWeight: "600",
    marginBottom: 2,
  },

  searchValue: {
    fontSize: 12,
    color: "#213A2F",
    fontWeight: "700",
  },

  searchDivider: {
    height: 1,
    backgroundColor: "#EDF1EE",
    marginVertical: 5,
  },

  searchButton: {
    marginTop: 10,
    height: 45,
    borderRadius: 13,
    backgroundColor: "#285E48",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },

  /* ===========================================================
     SECTION
  =========================================================== */

  section: {
    marginTop: 28,
  },

  sectionHeader: {
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15,
  },

  sectionHeaderText: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#16392A",
  },

  sectionSubtitle: {
    fontSize: 10,
    lineHeight: 15,
    color: "#7A8C83",
    marginTop: 4,
  },

  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingBottom: 2,
    marginLeft: 8,
  },

  seeAllText: {
    color: "#356B54",
    fontSize: 10,
    fontWeight: "800",
  },

  /* ===========================================================
     LOCATION LIST
  =========================================================== */

  locationList: {
    paddingHorizontal: 18,
    gap: 12,
  },

  /* ===========================================================
     LOCATION CARD
  =========================================================== */

  locationCard: {
    width: 220,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    overflow: "hidden",

    shadowColor: "#244838",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 8,

    elevation: 3,
  },

  locationImageWrapper: {
    height: 132,
    position: "relative",
  },

  locationImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  locationBadge: {
    position: "absolute",
    left: 9,
    top: 9,
    backgroundColor: "rgba(42, 105, 76, 0.93)",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  badgeDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#B7F3D2",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
  },

  favoriteButton: {
    position: "absolute",
    top: 9,
    right: 9,
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: "rgba(20,40,31,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  locationBody: {
    padding: 12,
  },

  locationName: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "900",
    color: "#18392B",
    marginBottom: 7,
  },

  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 4,
  },

  locationInfoText: {
    flex: 1,
    fontSize: 9.5,
    color: "#7B8C84",
  },

  locationFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 9,
  },

  locationPrice: {
    fontSize: 12,
    color: "#18392B",
    fontWeight: "900",
  },

  locationPriceUnit: {
    fontSize: 8.5,
    color: "#899790",
    marginTop: 1,
  },

  arrowButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#285E48",
    justifyContent: "center",
    alignItems: "center",
  },

  /* ===========================================================
     FEATURE
  =========================================================== */

  featureContainer: {
    marginHorizontal: 18,
    marginTop: 25,
    backgroundColor: "#E5F0E9",
    borderRadius: 18,
    padding: 13,
    gap: 12,
  },

  featureItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  featureIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  featureText: {
    flex: 1,
  },

  featureTitle: {
    color: "#1C4231",
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 2,
  },

  featureDescription: {
    color: "#7B8C83",
    fontSize: 8.5,
    lineHeight: 12,
  },

  /* ===========================================================
     WHY SECTION
  =========================================================== */

  whySection: {
    marginTop: 34,
    paddingHorizontal: 18,
  },

  centerSectionHeader: {
    alignItems: "center",
  },

  whyTitle: {
    textAlign: "center",
    color: "#183A2B",
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "900",
  },

  whyTitleGreen: {
    color: "#356B54",
  },

  whySubtitle: {
    textAlign: "center",
    color: "#7A8C83",
    fontSize: 9.5,
    lineHeight: 14,
    marginTop: 7,
  },

  /* ===========================================================
     WHY GRID
  =========================================================== */

  whyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 18,
    gap: 10,
  },

  whyCard: {
    width: "48%",
    minHeight: 145,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#214333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7,

    elevation: 2,
  },

  whyIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#EAF3ED",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  whyCardTitle: {
    color: "#1D3D2E",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
  },

  whyCardDescription: {
    color: "#829189",
    fontSize: 8.5,
    lineHeight: 13,
    textAlign: "center",
    marginTop: 5,
  },

  /* ===========================================================
     CTA
  =========================================================== */

  ctaContainer: {
    marginHorizontal: 18,
    marginTop: 30,
    borderRadius: 20,
    overflow: "hidden",
  },

  ctaBackground: {
    width: "100%",
    minHeight: 260,
  },

  ctaImage: {
    resizeMode: "cover",
  },

  ctaOverlay: {
    flex: 1,
    minHeight: 260,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  ctaTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "900",
    textAlign: "center",
  },

  ctaDescription: {
    color: "#DDEBE3",
    fontSize: 9.5,
    lineHeight: 15,
    textAlign: "center",
    marginTop: 9,
  },

  ctaButton: {
    backgroundColor: "#2E7959",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginTop: 17,
  },

  ctaButtonText: {
    color: "#FFFFFF",
    fontSize: 10.5,
    fontWeight: "800",
  },

  /* ===========================================================
     FOOTER
  =========================================================== */

  footer: {
    marginHorizontal: 18,
    marginTop: 25,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: "#D9E5DD",
  },

  footerLogo: {
    flexDirection: "row",
    alignItems: "center",
  },

  footerLogoIcon: {
    width: 31,
    height: 31,
    borderRadius: 9,
    backgroundColor: "#285E48",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  footerLogoText: {
    color: "#214434",
    fontSize: 11,
    fontWeight: "900",
  },

  footerSmallText: {
    color: "#8A9991",
    fontSize: 7.5,
    marginTop: 2,
  },

  footerCopyright: {
    color: "#9AA69F",
    fontSize: 8,
    marginTop: 14,
    textAlign: "center",
  },
});
