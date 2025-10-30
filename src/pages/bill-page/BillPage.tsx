import BillDetails from "../bill-details/BillDetails"
import LetterPad from "../letter-pad/LetterPad"

const BillPage = () => {
  return (
    <div>
        <LetterPad>
            <BillDetails />
        </LetterPad>
    </div>
  )
}

export default BillPage