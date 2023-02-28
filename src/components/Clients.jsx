import { clients } from "../contants";
import styles from "../styles";

const Clients = () => (
  <section
    className={`${styles.flexCenter} my-5`}>
    <div
      className={`${styles.flexCenter} flex-wrap w-full `}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px] hover:bg-[#def9fa] hover:p-[10px]  hover:rounded-[10px]`}>
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain cursor-pointer 
            "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
