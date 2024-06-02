type Props = {
  customClass: string;
};

const PlayerNameCard: React.FC<Props> = ({ customClass }) => {
  return (
    <>
      <div className={`${customClass} w-48 rounded-lg bg-gray-500 text-white`}>
        Aditya
      </div>
    </>
  );
};

export default PlayerNameCard;
