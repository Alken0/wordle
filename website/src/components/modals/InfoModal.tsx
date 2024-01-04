import { Cell } from '../grid/Cell';
import { BaseModal } from './BaseModal';

type Props = {
    isOpen: boolean;
    handleClose: () => void;
};

export const InfoModal = ({ isOpen, handleClose }: Props) => {
    return (
        <BaseModal title="Anleitung" isOpen={isOpen} handleClose={handleClose}>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Erraten Sie das Wort in 6 Versuchen. Nach jedem Versuch ändert
                sich die Farbe der Kacheln um anzuzeigen, wie nahe du dem Wort
                warst.
            </p>

            <div className="mb-1 mt-4 flex justify-center">
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="K"
                    status="correct"
                />
                <Cell value="L" isCompleted={true} />
                <Cell value="E" isCompleted={true} />
                <Cell value="I" isCompleted={true} />
                <Cell value="N" isCompleted={true} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Der Buchstabe K ist in dem Wort enthalten und an der korrekten
                Position.
            </p>

            <div className="mb-1 mt-4 flex justify-center">
                <Cell value="P" isCompleted={true} />
                <Cell value="I" isCompleted={true} />
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="L"
                    status="present"
                />
                <Cell value="O" isCompleted={true} />
                <Cell value="T" isCompleted={true} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Der Buchstabe L ist im Wort enthalten, aber an der falschen
                Stelle.
            </p>

            <div className="mb-1 mt-4 flex justify-center">
                <Cell value="S" isCompleted={true} />
                <Cell value="E" isCompleted={true} />
                <Cell value="N" isCompleted={true} />
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="A"
                    status="absent"
                />
                <Cell value="T" isCompleted={true} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Der Buchstabe A kommt in dem Wort nicht vor.
            </p>

            <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
                This is an open source version of the word guessing game we all
                know and love -{' '}
                <a
                    href="https://github.com/cwackerfuss/react-wordle"
                    className="font-bold underline"
                >
                    check out the code here
                </a>{' '}
            </p>
        </BaseModal>
    );
};
