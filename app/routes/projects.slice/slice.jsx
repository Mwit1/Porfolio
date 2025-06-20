import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import beach from '~/assets/beach.jpg';
import gallery from '~/assets/gallery.jpg';
import booking from '~/assets/booking.jpg';
import landingpage from '~/assets/landingpage.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Hotel Dashboard and Booking System';
const description =
  'This project involved  wide range of technical, creative, and UX skills..';
const roles = ['Frontend Development', 'UX Design', 'Booking Functionality'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={beach}
          srcSet={`${beach} 1280w, ${beach} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="#"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="hotel"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Landing Page</ProjectSectionHeading>
              <ProjectSectionText>
                The landing page serves as the first impression of the hotel. It’s designed to immediately engage visitors, communicate the brand’s essence, and guide users toward booking a stay.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <Image
              src={landingpage}
              width={940}
              height={500}
              placeholder={landingpage}
              alt="Landingpage"
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Gallery</ProjectSectionHeading>
              <ProjectSectionText>
                Guests are more likely to book if they can see real photos of the rooms,
                 pool, restaurant, beach, or views. It reassures them that the hotel is clean, beautiful, and worth the price.
                 A well-organized gallery with clear navigation (sliders or grid layout) 
                 keeps users engaged longer and helps them imagine themselves at the hotel.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${gallery} 800w, ${gallery} 1920w`}
              width={800}
              height={500}
              placeholder={gallery}
              alt="gallery"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
             <Image
              srcSet={`${booking} 800w, ${booking} 1920w`}
              width={800}
              height={500}
              placeholder={booking}
              alt="booking"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <div className={styles.gridText}>
              <ProjectSectionHeading>Bookings</ProjectSectionHeading>
              <ProjectSectionText>
               The booking section is the main conversion point — it turns interest into action by letting users reserve rooms instantly without leaving the site.
               By allowing bookings directly through the website, the hotel avoids paying commission to third-party platforms like Booking.com or Airbnb.
                A clean, functional booking section makes the website look more legitimate and trustworthy, encouraging guests to proceed with confidence.              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                1. Modern & Responsive Hotel Website ---
                Delivered a clean, mobile-first design optimized for user experience across all devices.

                2. Fully Functional Booking System
                Enabled guests to book rooms directly through the website — increasing convenience and boosting direct bookings.

                3. Improved Online Presence
                The new site significantly enhanced the hotel’s brand image, making it more appealing and competitive online.

                4. Increased Guest Engagement
                Engaging visuals, a gallery section, and clear calls-to-action kept users on the site longer and encouraged bookings.

                5. Professional Email Integration
                Booking confirmations are now sent directly to the hotel’s official email, improving communication and operations.  

                6. Optimized for Speed & SEO
                Fast load times and proper meta tags helped improve search visibility and user retention.

              </ProjectSectionText>
            </ProjectTextRow>
            
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
