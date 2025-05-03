import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 3,
  },
});

const ResumeDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{data.name}</Text>
        <Text style={styles.text}>Phone: {data.phone}</Text>
        <Text style={styles.text}>Email: {data.email}</Text>
        <Text style={styles.text}>URL 1: {data.url1}</Text>
        <Text style={styles.text}>URL 2: {data.url2}</Text>
        <Text style={styles.text}>Native: {data.native}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
