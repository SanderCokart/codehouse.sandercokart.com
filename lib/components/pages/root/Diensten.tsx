import type {PriceModel, TagModel} from '@/types/ModelTypes';

import Image from 'next/image';
import {useState} from 'react';
import {EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import AmbulantImage from '@/public/static/images/car.webp';
import MassageImage from '@/public/static/images/massage.webp';
import PedicureImage from '@/public/static/images/pedicure.webp';
import SpaImage from '@/public/static/images/spa.webp';

interface DienstenProps {
    prices: PriceModel[];
    tags: TagModel[];
}

export default function Diensten({ prices, tags }: DienstenProps) {
    const [swiper, setSwiper] = useState<any>(null);
    const [selectedTag, setSelectedTag] = useState<{ tag: TagModel | null, index: number }>({
        tag: tags?.[0] ?? null,
        index: 0
    });

    const onQuoteClick = () => {
        const pedicureTagIndex = tags?.findIndex(tag => tag.name === 'Pedicures');
        if (pedicureTagIndex)
            setSelectedTag({ tag: tags?.[pedicureTagIndex] ?? null, index: pedicureTagIndex });
    };

    return <section
        className="my-12 scroll-mt-20 flex flex-col gap-8 p-2 text-white widescreen:section-min-height tallscreen:section-min-height"
        id="diensten">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Diensten
        </h2>
        <Swiper allowTouchMove={false} className="w-full pointer-events-none" effect="fade" modules={[EffectFade]}
                slidesPerView={1} onSwiper={(s) => {
            setSwiper(s);
        }}>
            <SwiperSlide>
                <Image alt="Pedicure"
                       className="rounded-2xl mx-auto md:w-1/2 border border-solid border-green-400 border-4 h-52"
                       src={PedicureImage} style={{ objectFit: 'cover' }}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image alt="Spa"
                       className="rounded-2xl mx-auto md:w-1/2 border border-solid border-green-400 border-4 h-52"
                       src={SpaImage} style={{ objectFit: 'cover' }}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image alt="Ambulant"
                       className="rounded-2xl mx-auto md:w-1/2 border border-solid border-green-400 border-4 h-52"
                       src={AmbulantImage} style={{ objectFit: 'cover' }}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image alt="Massages"
                       className="rounded-2xl mx-auto md:w-1/2 border border-solid border-green-400 border-4 h-52"
                       src={MassageImage} style={{ objectFit: 'cover' }}/>
            </SwiperSlide>
        </Swiper>
        <div className="relative rounded-xl bg-green-700 dark:bg-green-900 p-2 border border-4 solid border-green-400">
            <div className="flex gap-4 p-2 space-evenly border-b border-solid overflow-x-auto">
                {tags?.map((tag, index) => (
                    <span key={tag.id}
                          className={`cursor-pointer whitespace-nowrap rounded-3xl ${selectedTag.tag?.name === tag.name ? 'bg-white' : 'bg-gray-300'} px-4 py-2 font-bold capitalize text-black shadow transition-colors w8`}
                          onClick={() => {
                              setSelectedTag({ tag, index });
                              swiper.slideTo(index);
                          }}>
                    {tag.name}
                </span>
                ))}
            </div>
            <div className="overflow-auto overscroll-auto md:overscroll-contain p-8">
                {selectedTag.tag?.name === 'Ambulant' ?
                 (
                     <section className="text-center md:h-full">
                         <h2 className="text-2xl font-bold">Ambulant Service</h2>
                         <div className="flex justify-center items-center h-full w-full text-xl">
                             <p className="md:w-2/3">Voor mensen die geen mogelijkheid hebben om naar mijn salon te komen,
                                 kan ik bij hen thuis behandelen met de tarieven die gelden onder het kopje <b><q
                                     className="cursor-pointer hover:text-blue-500"
                                     onClick={onQuoteClick}>Pedicures</q> </b> hierbij komen voorrijkosten van <b>€
                                     7.00</b>.</p>
                         </div>
                     </section>
                 ) : (
                     <table className="w-full border-collapse font-bold text-left">
                         <colgroup>
                             <col width="auto"/>
                             <col width="100"/>
                         </colgroup>
                         <thead>
                         <tr>
                             <th>Dienst</th>
                             <th className="text-right">Prijs</th>
                         </tr>
                         </thead>
                         <tbody>
                         {prices?.filter(price => price.tag === selectedTag.tag?.id).map(price => (
                             <tr key={price.id}
                                 className="h-10 hover:bg-green-400 hover:text-white dark:hover:bg-green-700"
                                 title={price.description}>
                                 <td>{price.name}</td>
                                 <td className="text-right">€ {price.price.toFixed(2)}</td>
                             </tr>
                         ))}
                         </tbody>
                     </table>
                 )}
            </div>
        </div>

    </section>;
}



