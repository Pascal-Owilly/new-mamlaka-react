import styles, { layout } from "../style";

const ComplianceCertifications = () => (
  <section className={`container mx-auto px-6 py-12 ${layout.section}`}>
    <div className={`flex flex-wrap justify-between items-center gap-12`}>
      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className={`${styles.heading3} text-primary text-3xl font-bold`}>
          Industry Certifications
        </h3>
        <p className={`${styles.paragraph} text-lg leading-relaxed`}>
          MHS is committed to maintaining the highest standards of industry compliance. Our certifications include:
        </p>

        {/* List of Certifications */}
        <ul className="space-y-4 mt-6">
          <li className="flex items-center">
            <img
              src="https://imgs.search.brave.com/mSUMD1SxX1cXqH8QtSC9avoIGqGT3XMu4MSrZh4wQuc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0kvaXNvLTI3/MDAxLWJ1cmVhdS12/ZXJpdGFzLWNlcnRp/ZmljYXRpb24tbG9n/by0yNUU4Qzc1NEI1/LXNlZWtsb2dvLmNv/bS5wbmc"
              alt="ISO 27001 Certification"
              className="w-12 h-12 mr-4 rounded-full shadow-lg"
            />
            <span className="text-xl font-semibold text-gray-700">
              ISO 27001 – Information Security Management
            </span>
          </li>
          <li className="flex items-center">
            <img
              src="https://imgs.search.brave.com/nwerPH8iLTzhQ8zp7AGYVgM4IOZ0J7RkKIm_nDJsl-w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWMt/Y2RuLmF0bGFzc2lh/bi5jb20vZGFtL2pj/cjo5MWRiZDFhMi03/NjZmLTQ4NDktODlh/ZC1mOWFiNWMwZDY5/ZTYvcGNpLWRzc18y/NTB4MjUwLnBuZz9j/ZG5WZXJzaW9uPTIx/OTM"
              alt="PCI DSS Certification"
              className="w-12 h-12 mr-4 rounded-full shadow-lg"
            />
            <span className="text-xl font-semibold text-gray-700">
              PCI DSS – Payment Card Industry Data Security Standard
            </span>
          </li>
          <li className="flex items-center">
            <img
              src="https://imgs.search.brave.com/Yqt7hQ6fcvp4ciLVSDzywxSZ7KTIwXcEru2jrXs-dg0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFsbGFtaW50ZXJu/ZXQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzExL0dE/UFItNjQweDI0MC5w/bmc"
              alt="GDPR Compliance"
              className="w-12 h-12 mr-4 rounded-full shadow-lg"
            />
            <span className="text-xl font-semibold text-gray-700">
              GDPR Compliance – General Data Protection Regulation
            </span>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className={`w-full lg:w-1/2 ${layout.sectionImg} relative`}>
        <img
          src="https://imgs.search.brave.com/_9ogFmsFd_p4eqLK42BljJ3Y__ifgVt6kZ7pb04XHn8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVya2lk/cy5jb20vcHVibGlj/L21lZGlhL2ltYWdl/cy9pc28yNzAxLmpw/Zw"
          alt="Industry Certifications"
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-lg" />
      </div>
    </div>
  </section>
);

export default ComplianceCertifications;
