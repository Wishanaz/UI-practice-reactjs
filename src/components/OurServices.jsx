

const services = [
  {
    title: "Custom Bouquets",
    description: "Handcrafted floral arrangements tailored to your personality and space.",
    icon: "💐",
  },
  {
    title: "Event Decoration",
    description: "Beautiful floral decor for weddings, parties, and corporate events.",
    icon: "🎉",
  },
  {
    title: "Delivery Service",
    description: "Fresh flowers delivered to your doorstep, anywhere in London.",
    icon: "🚚",
  },
  {
    title: "Workshops",
    description: "Learn the art of flower arrangement with our hands-on workshops.",
    icon: "🌿",
  },
];

const OurServices = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
