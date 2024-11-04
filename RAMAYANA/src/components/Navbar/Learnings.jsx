import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Learnings({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 mt-16">
      <div className="relative flex flex-col items-center p-4 bg-slate-900 rounded-lg font-serif h-[72vh] md:h-[80vh] w-[80vw] md:w-[60vw] overflow-y-auto shadow-2xl border border-orange-500">
        <button
          className="absolute top-2 right-2 text-2xl text-white hover:text-orange-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="text-4xl font-bold my-4 text-center text-white">Top Lessons from the Ramayana</div>

        {/* Lessons Section */}
        <div className="my-4 p-4 bg-gray-300 rounded-lg shadow-lg text-center border border-orange-500">
          <ul className="list-disc text-left px-6 text-base text-[#6e4d31]">
            <li className="mb-2">
              <strong>1. Importance of Duty:</strong> Rama's acceptance of his 14-year exile to honor his father's promise demonstrates the importance of duty over personal desires.
            </li>
            <li className="mb-2">
              <strong>2. Devotion to Parents:</strong> Bharata's refusal to take the throne and insistence that Rama is the rightful king shows profound devotion and respect for his father's wishes.
            </li>
            <li className="mb-2">
              <strong>3. Power of Righteousness:</strong> Rama's victory over Ravana, despite the latter's immense power, underlines that righteousness and moral integrity will eventually triumph over evil.
            </li>
            <li className="mb-2">
              <strong>4. Loyalty in Relationships:</strong> Sita's unwavering faithfulness to Rama during her abduction exemplifies the strength of loyalty in maintaining relationships.
            </li>
            <li className="mb-2">
              <strong>5. Strength of Humility:</strong> Ravana's downfall, primarily due to his arrogance and disregard for others, serves as a stark reminder of humility's value.
            </li>
            <li className="mb-2">
              <strong>6. Importance of Teamwork:</strong> The construction of the Ram Setu highlights the achievements possible through teamwork, with each individual's contributions being vital.
            </li>
            <li className="mb-2">
              <strong>7. Courage and Bravery:</strong> Hanuman's journey to Lanka, facing numerous challenges alone, teaches the value of courage and bravery in overcoming obstacles.
            </li>
            <li className="mb-2">
              <strong>8. Wisdom Over Strength:</strong> Lakshmana's strategic thinking during battles illustrates that wisdom and intellect often prevail over mere physical strength.
            </li>
            <li className="mb-2">
              <strong>9. Consequences of Deceit:</strong> Mareecha's role in Sita's abduction by aiding Ravana underlines how deceit can lead to harm and suffering for many.
            </li>
            <li className="mb-2">
              <strong>10. The Power of Forgiveness:</strong> Rama's forgiveness of his enemies and acceptance of Vibhishana into his camp shows the liberating power of forgiveness.
            </li>
            <li className="mb-2">
              <strong>11. Adherence to One's Promises:</strong> Rama's unwavering commitment to rescuing Sita, fulfilling his promise to her, stresses the importance of keeping one's word.
            </li>
            <li className="mb-2">
              <strong>12. Respecting Elders:</strong> Rama's respect towards sage Vishwamitra and his adherence to the sage's advice exemplifies respect for knowledge and age.
            </li>
            <li className="mb-2">
              <strong>13. The Impact of Good Governance:</strong> Rama's rule, known as Ram Rajya, symbolizes the ideal governance marked by fairness, prosperity, and justice for all citizens.
            </li>
            <li className="mb-2">
              <strong>14. Selflessness:</strong> Lakshmana's readiness to accompany Rama into exile shows selflessness, placing the needs of loved ones above personal comfort.
            </li>
            <li className="mb-2">
              <strong>15. Value of Friendship:</strong> Sugriva's alliance with Rama, offering mutual assistance in times of need, highlights the enduring value of true friendship.
            </li>
            <li className="mb-2">
              <strong>16. Overcoming Adversity:</strong> The challenges faced by Rama, Lakshmana, and Sita in the forest teach resilience and the ability to overcome adversity with determination.
            </li>
            <li className="mb-2">
              <strong>17. Justice Prevails:</strong> Rama's eventual victory in the battle against Ravana assures that justice will prevail, despite temporary setbacks.
            </li>
            <li className="mb-2">
              <strong>18. Sacrifice for Greater Good:</strong> Rama's decision to banish Sita, to uphold societal norms, underscores the theme of personal sacrifice for the greater good.
            </li>
            <li className="mb-2">
              <strong>19. Patience and Timing:</strong> Rama waiting for the right moment to attack Lanka, rather than rushing into battle, underscores the importance of patience and timing.
            </li>
            <li className="mb-2">
              <strong>20. Spiritual Growth:</strong> The entire journey of Rama can be seen as an allegory for one's own spiritual journey, facing and overcoming various 'demons' or challenges towards enlightenment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Learnings;
